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

	newPage := Page{Slides: false}
	newPage.funTitles()
	e.GET("/", startPage)

	e.Logger.Fatal(e.Start(":8080"))
}

func startPage(c echo.Context) error {
	err := c.Render(http.StatusOK, "index", nil)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

type Page struct {
	Slides         bool
	PortfolioTitle string
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

func (p *Page) funTitles() {
	if rand.Intn(1001)%500 == 0 {
		p.PortfolioTitle = "Help!"

	}
}
