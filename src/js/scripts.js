import $ from "jquery"

$(document).ready(function() {
  console.log(`jquery version at ${$.fn.jquery}`)
  $("h1").click(function() {
    $(this).css("background-color", "#ff0000")
  })
})
