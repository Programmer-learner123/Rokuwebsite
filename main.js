
$('#searchForm').on('shown.bs.collapse', function () {
    // focus input on collapse
    $("#search").focus()
})
$('#myForm').on('submit', function(e){
    $('#myModal').modal('show');
    e.preventDefault();
  });