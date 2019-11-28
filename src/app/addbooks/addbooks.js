$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});

$(".dropdown-toggle").dropdown();
