// Efeito de loading com JQuery
$(function () {
  $(".loader").fadeOut(4000, function () {
    $(".content").fadeIn(800);
  });
});