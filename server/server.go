package server

import (
	"io"
	"net/http"
	"os"
	"text/template"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
)

func Init() {
	e := echo.New()
	e.Static("/static", "app")
	e.Renderer = NewTemplate()
	e.GET("/", mainHandler)
	err := godotenv.Load()
	if err != nil {
		e.Logger.Fatal("Error loading .env file")
	}
	PORT := os.Getenv("PORT")
	e.Logger.Fatal(e.Start(PORT))
}

type Template struct {
	templates *template.Template
}

func NewTemplate() *Template {
	return &Template{templates: template.Must(template.ParseGlob("app/views/*.html"))}
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func mainHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "index", nil)
}
