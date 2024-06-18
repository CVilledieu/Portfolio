package server

import (
	"html/template"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Start() {
	e := echo.New()
	e.Static("/static", "public")

	e.Renderer = newTemplate()
	e.GET("/", StartPage)
	e.GET("/slide", SlidesPage)

	e.Logger.Fatal(e.Start(":8080"))
}

func StartPage(c echo.Context) error {
	err := c.Render(http.StatusOK, "index", nil)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

func SlidesPage(c echo.Context) error {
	newPage := Page{Slides: true}
	err := c.Render(http.StatusOK, "index", newPage)
	if err != nil {
		panic("tried ot switch to slides style and failed")
	}
	return err
}

type Page struct {
	Slides bool
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
