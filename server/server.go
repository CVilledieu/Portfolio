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
	Index   int
}

func StartServer() {
	e := echo.New()
	e.Static("/static", "public")
	e.Renderer = newTemplate()

	e.GET("/", getHome)
	e.GET("/1", getProject)

	e.Logger.Fatal(e.Start(":8080"))
}

// Creates page and sends important info created as page struct
func getHome(c echo.Context) error {

	newPage := newPage(0)
	err := c.Render(http.StatusOK, "index", newPage)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

// Creates page and sends important info created as page struct
func getProject(c echo.Context) error {
	index := 1
	newPage := newPage(index)
	err := c.Render(http.StatusOK, "index", newPage)
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

// i is set to 0 for the home page and grabs the first index of the JSON.
// User picks what project they want to have selected. getProject() calls newPage() with the new index
func newPage(i int) Page {
	return Page{
		Project: getProjectJSON()[i],
		List:    getProjectJSON(),
	}
}
