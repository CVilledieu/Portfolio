package server

import (
	"html/template"
	"io"
	"math/rand"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Start() {
	e := echo.New()
	e.Static("/static", "public")
	e.Renderer = newTemplate()

	e.GET("/", startPage)

	e.Logger.Fatal(e.Start(":8080"))
}

// Creates the page based on the templates, but does not pass in any extra info
func startPage(c echo.Context) error {
	newPage := Page{Slides: false, Project: newProject()}
	newPage.funTitles()
	err := c.Render(http.StatusOK, "index", newPage)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

type Page struct {
	Slides         bool
	PortfolioTitle string
	Project        *Project
}

type Project struct {
	Img         string
	Title       string
	Description string
}

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}
func newTemplate() *Template {
	return &Template{
		templates: template.Must(template.ParseGlob("public/views/*.html")),
	}
}

// Addes a PortfolioTitle to the page struct based on random chance. Default title is My portfolio, but any PortfolioTitle property passed into the templates will update the title
func (p *Page) funTitles() {
	if rand.Intn(1001)%500 == 0 {
		p.PortfolioTitle = "Help!"

	}
}

// Img will be in /static/images/logos/
// Img property of Project struct is the name of the svg file
func newProject() *Project {
	return &Project{
		Img:         "htmx",
		Title:       "Test Project",
		Description: "A project I am working on",
	}
}
