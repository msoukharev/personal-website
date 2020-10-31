const TAB_CONTEND_IDS = [
    "#extracurricular", 
    "#classes"
]

$("experienceTab a").on('click', (event) => {
    event.preventDefault()
    $(this).tab('show')
})

TAB_CONTEND_IDS.map((id) => {
    $(`#experienceTab a[href="${id}"]`).tab('show')
})
