$(document).ready(function(){
  $("#submit-form").validate({
      rules:{
          name:{
              required:true,
              minlength:4,
          },
          email:{
              required:true,
              email:true
          },
          subject:{
              required:true,
          },
          message:{
              required:true
          }
      }
      
  })
})