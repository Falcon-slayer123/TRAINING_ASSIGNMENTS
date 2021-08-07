
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function(){
  $("#btn1").click(function(){
    $("#box").animate({
    width: "250px",
    height: "250px",
    paddingLeft:"100px",
   marginLeft:"500px",
   background:"BLUE",
   fontSize:"60px",
   height: "200px"});
  });

  $("#btn2").click(function(){
    $("#box").animate({
      width:"100px",
      height: "200px",
    margin:"6px",
  fontSize:"20px"});
  });
});

$(document).ready(function(){
  const password=$('#password');
  $('#eye').click(function(){
    if(password.prop('type') == 'password'){
      $(this).addClass('fa-eye-slash');
      password.attr('type','text')
    }
    else {
      $(this).removeClass('fa-eye-slash');
      password.attr('type','password');
    }

  })

})

function SetFullName() {
  document.getElementById("Artist_fullname").value = "";
  document.getElementById("Artist_fullname").value =
    document.getElementById("Artist_fname").value;
}