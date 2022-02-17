// Efeito de loading com JQuery
$(function () {
  $(".loader").fadeOut(5000, function () {
    $(".content").fadeIn(900);
  });
});