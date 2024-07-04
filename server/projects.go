package server

import (
	"encoding/json"
	"fmt"
	"os"
)

type Project struct {
	Title       string
	Description string
	Link        string
	Lang        string
}

// Pulls project info from the json file
// Project
func getProjectJSON() []Project {
	bData, err := os.ReadFile("public/other/projects.json")
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
