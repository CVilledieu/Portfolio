package server

import (
	"encoding/json"
	"fmt"
	"os"
)

func createProjectList() []Project {
	lang := []string{"Go", "Go", "JS", "Go/JS"}
	names := []string{"Password Generator", "PERSONAL DATABASE", "project 4", "LEETCODE INFO"}
	description := []string{"Creates a random password using a random seed and phrase entered by the user.", "A redis database created from scratch", "unpicked project. Something in JS so not everything is in go", "General info of problems work on LeetCode. Samples of different problems."}
	link := []string{"https://github.com/CVilledieu/PasswordMaker", "#", "#", "#", "#"}
	list := []Project{}
	for i, name := range names {
		list = append(list, newProject(name, description[i], link[i], lang[i]))
	}
	return list
}

// Img will be in /static/images/logos/
// Img property of Project struct is the name of the svg file
func newProject(name, description, link, lang string) Project {
	return Project{
		Title:       name,
		Description: description,
		Link:        link,
		Lang:        lang,
	}
}

func getProjectJSON() []Project {
	bData, err := os.ReadFile("/static/other/projects.json")
	if err != nil {
		fmt.Println("Panic! but like dont actually. There was an error in the json")
	}
	var list []Project
	err = json.Unmarshal(bData, &list)
	if err != nil {
		fmt.Println("Panic! but like dont actually. There was an error in the json")
	}
	return list
}
