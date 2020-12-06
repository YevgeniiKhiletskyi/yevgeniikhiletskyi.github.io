$(".form").submit( e => {
  e.preventDefault();

  $.fancybox.open( {
    src: "#modal",
    type: "inline"
  })
});

$(".btn-close_app").click( e => {
  e.preventDefault();

  $.fancybox.close();
});