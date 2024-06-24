package server

func createProjectList() []Project {
	names := []string{"Password Generator", "project 2", "project 3", "project 4", "project 5"}
	description := []string{"Creates a random password using a random seed and phrase entered by the user.", "Help", "me", "!", "5"}
	link := []string{"https://github.com/CVilledieu/PasswordMaker", "#", "#", "#", "#"}
	list := []Project{}
	for i, name := range names {
		list = append(list, newProject(name, description[i], link[i]))
	}
	return list
}

// Img will be in /static/images/logos/
// Img property of Project struct is the name of the svg file
func newProject(name, description, link string) Project {
	return Project{
		Img:         "test",
		Title:       name,
		Description: description,
		Link:        link,
	}
}
