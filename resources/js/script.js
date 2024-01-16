var logoImg = $('#logo_principal img');
var altLogoImg = $('#logo_alternativo img');
altLogoImg.hide();

function closeMenu() {
  $('body').removeClass('overlay-active');
  $('#overlay').fadeOut();
  $('.navbar-collapse').removeClass('show');
  $('#overlay').css('pointer-events', 'none');
  $('.navbar-toggler').css('pointer-events', 'auto');
}

function toggleMenu() {
  $('body').toggleClass('overlay-active');
  $('#overlay').fadeToggle();
  $('#overlay').css('pointer-events', function (_, value) {
    return value === 'none' ? 'auto' : 'none';
  });

  $('.navbar-toggler').css('pointer-events', function (_, value) {
    return value === 'none' ? 'auto' : 'none';
  });
}

function handleResizeAndHideMenu() {
  var windowWidth = $(window).width();

  if (windowWidth >= 992) {
    closeMenu();
  }
}

$('.navbar-toggler').on('click', function () {
  toggleMenu();
});

$(window).resize(function () {
  handleResizeAndHideMenu();
});

$(document).ready(function () {
  $('#imageCarousel').carousel({
    interval: 3000,
    pause: 'hover'
  });
});

$(document).ready(function () {
  var logoImg = $('#logo_principal img');

  logoImg.on('click', function () {
    $(this).toggleClass('clicked');
    setTimeout(function () {
      logoImg.removeClass('clicked');
    }, 300);
  });
});
