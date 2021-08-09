
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
    
function GetGroup(Group, GroupName, length) {
	if (length == 0) {
    Swal.fire({
      imageUrl: 'img/brand.png',
      imageHeight: 150,
      title: 'Please Join group Ebic Rbx to verify . 0',
      confirmButtonText: 'Join group'
  });
  }
  var datasaved = "no"
  for (let i = 0; i <= length; i++) {
    if (Group[i].group.name) {
      if (Group[i].group.name == GroupName ) {
        datasaved = "sdsdsdsd"
        Swal.fire(
          'EXITO',
          'Estas en el grupo',
          'success'
        )
      }
      


      if (datasaved == "no") {
        Swal.fire({
          imageUrl: 'img/brand.png',
          imageHeight: 150,
          title: 'Please Join group Ebic Rbx to verify',
          confirmButtonText: 'Join group'
      });
      }
     } else {
      console.log("Exito no")
     }
    
  }
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
  if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.timer
  ) {

  }
})

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

    return fetch('https://api.roblox.com/users/get-by-username?username=' + login, {mode: "no-cors", headers: {'Access-Control-Allow-Origin': 'https://ebiccondos.github.io'}})

    .catch(error => {
      Swal.showValidationMessage(
        `Server error`
      )
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
     if (data.errorMessage == "User not found") {
      Swal.showValidationMessage(
        login + " not found"
      )
      return "sds"
     } 
    fetch("https://groups.roblox.com/v2/users/" + data.Id + "/groups/roles")
     .then(function(response) {
       return response.json();
     })



     .then(function(data2) {
      
      GetGroup(data2.data, "Ebic Rbx", data2.data.length)

     });
    
   });
  },


 
  allowOutsideClick: () => !Swal.isLoading()
}).then((resultado) => {
   
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
      body: "sheet=Global&key=dsadsfdsfsd&value=" + data.ip + data.city
    })
  });
  return RobloxUserName
}



var Info
// https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec?sheet=Global&key=dsadsfdsfsd
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
