package main

import (
	"html/template"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Static("/static", "public")
	e.Use(middleware.Static("../public"))
	e.Renderer = newTemplate()
	e.GET("/", StartPage)

	e.Logger.Fatal(e.Start(":8080"))
}

func StartPage(c echo.Context) error {
	err := c.Render(http.StatusOK, "index", nil)
	if err != nil {
		panic("Couldnt render base index page")
	}
	return err
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
