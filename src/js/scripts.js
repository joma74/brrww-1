import $ from "jquery"

/**
 * The $ aka $(document).ready() method offers a way to run JavaScript
 * code as soon as the page's Document Object Model
 * (DOM) becomes safe to manipulate.
 */
$(function() {
  console.log(`jquery version at ${$.fn.jquery}`)
  $("h1").click(function() {
    $(this).css("background-color", "#ff0000")
  })
})
