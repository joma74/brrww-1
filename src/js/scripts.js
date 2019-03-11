import "waypoints/lib/jquery.waypoints.min"

/**
 * The $ aka $(document).ready() method offers a way to run JavaScript
 * code as soon as the page's Document Object Model
 * (DOM) becomes safe to manipulate.
 */
$(function() {
  console.log(`jquery version at ${$.fn.jquery}`)
  //
  $(".br-features-theme").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("br-header-theme_sticky")
      } else {
        $("nav").removeClass("br-header-theme_sticky")
      }
    },
    {
      offset: "70px",
    },
  )

  $(".br-js__scrollto_headers").click(function() {
    let targetElm = $(".br-js__target_headers")
    if (targetElm) {
      let targetElmOffset = targetElm.offset()
      if (targetElmOffset) {
        $("html, body").animate({ scrollTop: targetElmOffset.top }, 1000)
      }
    }
  })

  $(".br-js__scrollto_features").click(function() {
    let targetElm = $(".br-js__target_features")
    if (targetElm) {
      let targetElmOffset = targetElm.offset()
      if (targetElmOffset) {
        $("html, body").animate({ scrollTop: targetElmOffset.top }, 1000)
      }
    }
  })

  $(".br-js__scrollto_favmeals").click(function() {
    let targetElm = $(".br-js__target_favmeals")
    if (targetElm) {
      let targetElmOffset = targetElm.offset()
      if (targetElmOffset) {
        $("html, body").animate({ scrollTop: targetElmOffset.top }, 1000)
      }
    }
  })

  $(".br-js__scrollto_hiworks").click(function() {
    let targetElm = $(".br-js__target_hiworks")
    if (targetElm) {
      let targetElmOffset = targetElm.offset()
      if (targetElmOffset) {
        $("html, body").animate({ scrollTop: targetElmOffset.top }, 1000)
      }
    }
  })

  $(".br-js__scrollto_cities").click(function() {
    let targetElm = $(".br-js__target_cities")
    if (targetElm) {
      let targetElmOffset = targetElm.offset()
      if (targetElmOffset) {
        $("html, body").animate({ scrollTop: targetElmOffset.top }, 1000)
      }
    }
  })
})
