// Efeito de loading com JQuery
$(function () {
  $(".loader").fadeOut(6000, function () {
    $(".content").fadeIn(800);
  });
});