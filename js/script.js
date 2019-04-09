var isMobile = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  }
}
$().ready(function () {
  $('#main-menu a').on('mousedown', function (e) {
    var section = $(this).attr('href')
    if (document.body.clientWidth < 768 || isMobile()) {
      if (section == '#') {
        $('html, body').stop().animate({
          scrollTop: $('html, body').offset().top
        }, 1500)
      } else {
        $('html, body').stop().animate({
          scrollTop: $(section).offset().top - 50
        }, 1500)
      }
      $('.main-navigation ul').hide()
    } else {
      if (section == '#') {
        $('html, body').stop().animate({
          scrollTop: $('html, body').offset().top
        }, 1500)
      } else {
        $('html, body').stop().animate({
          scrollTop: $(section).offset().top - 50
        }, 1500)
      }
    }
    e.preventDefault()
  })

  $('#main-menu a').on('click', function () {
    if ($('#main-menu').is(':visible')) {
      $('#main-menu').removeClass('active');
    } 
  })

  $('#sidebar-collapse').on('mousedown', function (e) {
    $('.side-menu').toggleClass('active')
    if ($('.side-menu').hasClass('active')) {
      $('#icon').removeClass('fa-arrow-right')
      $('#icon').addClass('fa-arrow-left')
      $('.overlay').show()
      $('html,body').css('overflow', 'hidden')
    } else {
      $('#icon').removeClass('fa-arrow-left')
      $('#icon').addClass('fa-arrow-right')
      $('.overlay').hide()
      $('html,body').css('overflow', '')
    }
  })

  $(window).scroll(function () {
    if (window.pageYOffset > 0) {
      $('#sidebar-collapse').attr('style', 'top:50px;')
    }else {
      $('#sidebar-collapse').attr('style', 'top:120px;')
    }
  })

  $('#navbar-collapse').on('mousedown', function () {
    $('#main-menu').toggleClass('active')
  })

  $('#main-menu li a').click(function () {
    $('#main-menu li a').removeClass('active')
    $(this).toggleClass('active')
  })

  $(window).scroll(function () {
    if (window.pageYOffset > 0) {
      $('#main-navigation').addClass('collapsed')
    } else {
      $('#main-navigation').removeClass('collapsed')
    }
  })
})
