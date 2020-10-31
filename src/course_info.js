let courseData = require('../assets/courses.json')

function createChild(content, link) {
    li = document.createElement("p")
    li.className = "list-group-item"
    li.textContent = content
    li.href = link
    li.target = "_blank"
}

courseData.map( (course) => {
    document.getElementById("courseList").appendChild(
        createChild(course.name, course.link)
    )
})