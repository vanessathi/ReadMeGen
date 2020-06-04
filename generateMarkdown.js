// username for github
// email 
// projectName
// description (of project)
 // projectURL
 function createUrl(username, projectName) {
    return `http://www.github.com/${username}/${projectName}`
}
// contribute
 // runFile
function fileCommand(runFile) {
    return (`
        To run the project, type this command in the terminal:
            ${runFile}
    `)
}

