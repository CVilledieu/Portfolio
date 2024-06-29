package server

import (
	"html/template"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Template struct {
	templates *template.Template
}

// All the items the page will need from the server
type Page struct {
	Project Project
	List    []Project
}

type Project struct {
	Img         string
	Title       string
	Description string
	Link        string
}

func StartServer() {
	e := echo.New()
	e.Static("/static", "public")
	e.Renderer = newTemplate()

	e.GET("/", getPortfolio)

	e.Logger.Fatal(e.Start(":8080"))
}

// Creates page and sends important info created as page struct
func getPortfolio(c echo.Context) error {

	err := c.Render(http.StatusOK, "index", nil)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}
func newTemplate() *Template {
	return &Template{
		templates: template.Must(template.ParseGlob("public/views/*.html")),
	}
}

func newPage() Page {
	return Page{
		Project: createProjectList()[0],
		List:    createProjectList()[1:],
	}
}
