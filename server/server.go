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
	e.GET("/quotes", quotesHandler)
	e.GET("/data", dataHandler)
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
	return &Template{templates: template.Must(template.ParseGlob("app/*.html"))}
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func mainHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "index", nil)
}

func dataHandler(c echo.Context) error {
	return c.Render(http.StatusOK, "data", nil)
}

func quotesHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"quote": "The only way to do great work is to love what you do.",
	})
}
