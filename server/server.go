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
	newPage := Page{Slides: false}
	e.Renderer = newTemplate()
	e.GET("/", StartPage)

	e.GET("/swapstyle", func(c echo.Context) error {
		newPage.Slides = !newPage.Slides
		err := c.Render(http.StatusOK, "index", newPage)
		if err != nil {
			panic("tried ot switch to slides style and failed")
		}
		return err
	})

	e.Logger.Fatal(e.Start(":8080"))
}

func StartPage(c echo.Context) error {
	err := c.Render(http.StatusOK, "index", nil)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
}

type Page struct {
	Slides  bool
	Special string
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
