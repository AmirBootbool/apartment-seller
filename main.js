$("button").on("click", function () {  // get values from each box on click
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    const source = $(`#results-template`).html()
    const template = Handlebars.compile(source)
    const newHtml = template({apartments})
    $(`#results`).append(newHtml)
}

renderApts(apartments) //renders apartments when page loads