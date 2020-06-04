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

function generateMarkdown(data) {
    return (`

## Project Title
-------------------------
${data.projectName}

## Project Link
-------------------------
${createUrl(data.username, data.title)}

## Contributors
-------------------------
${data.contribute}

## Description
-------------------------
${data.description}

## Installation Command
-------------------------
${data.fileCommand}

## CONTACT
-------------------------
For questions and inquiries, please e-mail ${data.email}

    `)
}
    
module.exports = generateMarkdown;
            