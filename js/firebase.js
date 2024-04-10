

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    uploadString,
    uploadBytesResumable,
    getDownloadURL,
    getMetadata,
    updateMetadata,
    deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import {
    getDatabase,
    ref,
    limitToLast,
    query,
    set,
    onValue,
    child,
    get,
    push,
    update,
    remove,
    runTransaction,
    onChildAdded,
    onChildChanged,
    onChildRemoved
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCCLFZ5rkQVUBgEaqTSn8RDlWEptjP-6Pk",
    authDomain: "myArrowcentre-c8e7c.firebaseapp.com",
    databaseURL: "https://myArrowcentre-c8e7c-default-rtdb.firebaseio.com",
    projectId: "myArrowcentre-c8e7c",
    storageBucket: "myArrowcentre-c8e7c.appspot.com",
    messagingSenderId: "682667422002",
    appId: "1:682667422002:web:458c34d82f68c0bbba272b",
    measurementId: "G-TSL52QZ00D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
var Toast = Swal.mixin({
    toast: true,
    position: 'center-right',
    showConfirmButton: false,
    timer: 5000
});
$(document).ready(function() {
    check();
    countDownDate2();topNBottomContent();
    $('#createAccountX').on('click',function(e){
        onAuthStateChanged(auth, (user) => {
            if (user) {
                location.assign('profile.html');
            }else{
                location.assign('account.html')
            }
        })});


        




        if(localStorage.getItem('serviceID')!=null){
        $('.scrib').html(localStorage.getItem('scrib'));
    var servic_single=localStorage.getItem('serviceID').trim();
    var dbRef3 =ref(database, '/Arrowcentre tyres limited/pages/Index/Our Services/'+servic_single);
        onValue(dbRef3, (snapshot) => {
        // var services_nav=document.getElementById('ser-singlePost');
        const data=snapshot.val();
    if(document.getElementById('ser-singlePost')!=null){
            var imageUrl = data.photo1;
            $("#service-breadcrumb-area").css("background-image", "url(" + imageUrl + ")");
         $('#ser-singlePost').html('<div class="col-md-7 col-sm-12 col-xs-12">'+
            '<div class="text-holder">'+
            ' <div class="sec-title">'+
                    '<h1 class="scrib">'+data.topic+'</h1>'+
                    '<span class="border"></span>'+
            ' </div>'+
                '<div  class="text">'+
                    // '<span>'+data.whyTitle+'</span>'+
                    '<p class="top">'+data.broadDesc+'</p><br>'+
                '</div>'+
                '<div class="text">'+
                '<span style="color:#0023e7;">Why Our '+data.topic+' ?</span>'+
                '<p class="top">'+data.broadDescWhy+'</p>'+
                ' </div>'+
            '</div>'+
            '</div>'+
            '<div class="col-md-5 col-sm-12 col-xs-12">'+
            '<div class="img-box">'+
                '<div class="single-img-box">'+
                    '<img src="'+data.photo1+'" alt="Awesome Image">'+
                '</div>'+
                '<div class="single-img-box">'+
                    '<img src="'+data.photo2+'" alt="Awesome Image">'+
                '</div>'+
            '</div>'+
            '</div>');
        }
        })
    }
    $('.copyright-text').html('');
    const d = new Date();
let year = d.getFullYear();
$('.copyright-text').html('<p> <span class="fa fa-copyright"></span>Copyright 2020 - '+year+' All Rights Reserved by <a href="./">Arrowcentre Tyres (U) Ltd</a></p> ')
topNBottomContent();
footerPosts();
check();

});
function  topNBottomContent(){
    var dbRef = ref(database, '/Arrowcentre tyres limited/Company Info');
    onValue(dbRef, (snapshot) => {
      
       
        $('#top_icons').html('');
        $('.header-area').html('');$('#who_weAre').html('');
        $('.footer-social-links').html('');$('.our-info').html('');
        const data = snapshot.val();
        $('.ourmail').html('Email: '+data.email);
        $('.ourphone').html('Ph: '+data.phone);
        $('._phone').text(data.phone);




    $('#top_icons').html(' <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12"><div class="top-left"><ul class="top-contact-info"></span><li><span  class="flaticon-clock">'+data.workHours+'</li><li><span class="fa fa-whatsapp"></span>'+data.phone+'</li></ul></div></div><div class="col-lg-4 col-md-4 col-sm-12 col-xs-12"><div class="top-right"><ul class="social-links pull-left"><li> <a href="https://facebook.com/Arrowcentretyres/"><i class="fa fa-facebook-f"></i></a></li><li><a href="https://twitter.com/Arrowcentretyres"><i class="fa fa-twitter"></i></a></li><li> <a href="https://instagram.com/Arrowcentretyres/"><i class="fa fa-instagram"></i></a></li><li> <a href="https://www.linkedin.com/company/Arrowcentretyres"><i class="fa fa-linkedin"></i></a></li></ul><div class="appoinment-button pull-right"><a href="./statements.html">Check Online Statement</a></div></div></div>');
    $('.header-area').html('<div class="container">'+
    '<div class="row">'+
        '<div class="col-md-12">'+
            
           ' <div class="header-contact-info ">'+
               ' <ul>'+
                    '<li>'+
                        '<div class="icon-holder">'+
                          '  <span class="flaticon-tool"></span>'+
                        '</div>'+
                        '<div class="text-holder">'+
                           ' <h3>Address:</h3>  '+
                            '<span>'+data.location+'</span> ' +
                       ' </div>'+
                  '  </li>'+
                    '<li>'+
                        '<div class="icon-holder">'+
                          '  <span class="flaticon-write"></span>'+
                        '</div>'+
                        '<div class="text-holder">'+
                           ' <h3>Email:</h3>  '+
                            '<span>'+data.email+'</span> ' +
                       ' </div>'+
                  '  </li>'+
                    '<li id="change">'+
                    '<div style="cursor:pointer;" onclick="location.assign(\'offers_and_more.php\')" id="countdown"><div class="cd-box">       <p id="days2" class="numbers days">00</p><p class="strings timeRefDays">Days</p>      </div>      <div class="cd-box"><p id="hours2" class="numbers hours">00</p><p class="strings timeRefHours">Hours</p> </div><div class="cd-box">  <p id="minutes2" class="numbers minutes">00</p><p class="strings timeRefMinutes">Minutes</p>  </div>  <div class="cd-box"> <p id="seconds2" class="numbers seconds">00</p><p class="strings timeRefSeconds">Seconds</p>   </div> <div class="cd-box"> <p id="promocade" style="font-family:\'Nunito\', sans-serif;font-size: 18px;" class="numbers seconds">Sorry :(</p><p id="promocade_desc" style="background: var(--blue);font-size:13px;" class="strings timeRefSeconds">No Offers Today!</p>   </div> </div>'+
                  
                   ' </li>'+
               ' </ul> '  + 
            '</div> '+
           
      '  </div>'+
   ' </div>'+
'</div>');

$('.whoEE').html('<span style="color: #000;font-weight:400;">'+data.about+'</span>');
$('.aboutSes').html('<span style="color: #000;font-weight:400;">'+data.ServicesOffered+'</span>');
$('.vision').html('<span>'+data.Vission+'</span>');

$('.guarantee').html('<span style="color: #fff;font-weight:700;">'+data.Guarantee+'</span>');



$('#who_weAre').html('<div class="text-holder">'+
 '<div class="sec-title">'+
'<h1>Welcome to <span>Arrowcentre Tyres</span></h1>'+
'<span class="border"></span>'+
'</div>'+
'<div class="text-box">'+
'<p>'+data.ServicesOffered.substring(0, 650)+ '... <a style="color: #0023e7;" href="#">Read More <span class="fa fa-Arrowtyres-right"></span></a> </p>'+
'<div class="name-signature">'+
    '<div class="name">'+
    '</div>'+
'</div></div></div>');
$('.footer-social-links').html('<li> <a href="https://facebook.com/Arrowcentretyres/"><i class="fa fa-facebook-f"></i></a></li><li><a href="https://twitter.com/Arrowcentretyres"><i class="fa fa-twitter"></i></a></li><li> <a href="https://instagram.com/Arrowcentretyres/"><i class="fa fa-instagram"></i></a></li><li> <a href="https://www.linkedin.com/company/Arrowcentretyres"><i class="fa fa-linkedin"></i></a></li><li><a href="https://api.whatsapp.com/send/?phone=256709828766&amp;text=I%27m+interested+in+your+products+%22posted+on+your+website&amp;type=phone_number&amp;app_absent=0"><i class="fa fa-whatsapp"></i></li>');
$('.our-info').html(' <p>'+data.ServicesOffered.substring(0, 250)+ '...</p><a class="thm-btn" href="./about.html">Learn more</a>');
$('.mar-bottom').html(' <div class="title">                        <h3>Contact</h3>                    </div>                    <ul class="footer-contact-info">                        <li>                            <div class="icon-holder">                                <span class="flaticon-maps-and-flags"></span>                            </div>                            <div class="text-holder">                                <h5>'+data.location+'</h5>                            </div></li>                        <li>                            <div class="icon-holder">                                <span class="flaticon-phone-receiver"></span>                            </div>                            <div class="text-holder">                                <h5>Phone '+data.phone+'</h5>                            </div>                        </li>                        <li>                            <div class="icon-holder">                                <span class="flaticon-envelope"></span> </div> <div class="text-holder"><h5>'+data.email+'</h5></div></li><li><div class="icon-holder"><span class="fa fa-whatsapp"></span></div><div class="text-holder"><h5>'+data.phone+'</h5></div></li></ul><div class="map"><a href="https://g.page/Arrowcentre-tyres-kampala?share">Find Us On Map</a></div>');  
});
}



function footerPosts(){
    if(document.getElementById('latest-blog')!=null){
         var dbRef = query(ref(database, 'Arrowcentre tyres limited/Posts'), limitToLast(2));
            onValue(dbRef, (snapshot) => {
 var footerPosts=document.getElementById('latest-blog');
 footerPosts.innerHTML="";
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const data = childSnapshot.val();
                    var serviceID="\'postID\'";
                    var redirect="\'blog-single.php\'";
                    footerPosts.innerHTML='<li id="'+childKey+'" onclick="localStorage.setItem('+serviceID+',this.id),location.replace('+redirect+')"><div class="text-holder"><a href="#">'+data.postbody.substring(0, 74)+ '...</a><span><i class="fa fa-clock-o" aria-hidden="true"></i><time class="timeago" datetime="' + data.postdate + '"></time></span></div></li>'+ footerPosts.innerHTML;
jQuery("time.timeago").timeago();
})});
}

}
$('#Logout').on("click", (e) => {
    if (confirm("Are you sure you want to logout?")) {
      signOut(auth)
        .then(() => {
            localStorage.clear();
          location.replace("../index.html");
        })
        .catch((error) => {
          alert(error.message + " with error code: " + error.code);
        });
    } else {
      console.log("attemt to logout");
    }
  });
function check() {
 onAuthStateChanged(auth, (user) => {
        if (user) {


          const userID = user.uid;
          var userEmail = user.email;
          localStorage.setItem("userID", userID);
          localStorage.setItem("userEmail", userEmail);


            
            
            







            if (userEmail == "info@Arrowcentretyres.com" && user.uid == "dUDsaVTqz3Y11e31ym1VkeRjSxR2") {
               location.replace(".en/pages/Admin/lockscreen.html");
            }
            var dbRef = ref(database, '/Arrowcentre tyres limited/Clients/' + userID);
                  onValue(dbRef, (snapshot) => {
                    $('#accountIcons').html('');
                    var data = snapshot.val();
                      const name = data.name;

                      localStorage.setItem('userName', name);
                      localStorage.setItem('userPhone', data.phone);
                  
                    $('.titleName').text(data.name+' || Arrowcentre Profile Name');//username in profile tittle


                    if (data.pic != null) {
                        $('#accountIcons').html('<div style="visibility:hidden ;" class=" hide_on_mobile outer-search-box "></div><div id="userProfilePhoto " onclick="location.assign(\'profile.html\')" class="outer-search-box carts_1"><img src="'+data.pic+'" alt="'+name+'\'s Profile Image" title="'+name+'" /></div>');
                        localStorage.setItem('pic', data.pic);
                    }else{
                        $('#accountIcons').html('<div style="visibility:hidden ;" class=" hide_on_mobile outer-search-box "></div><div id="userProfilePhoto "  onclick="location.assign(\'profile.html\')" class="outer-search-box carts_1"><div class="carts " title="'+name+'"  style="text-transform: uppercase; font-weight:bolder;" ><b>'+name.substring(0,1)+'</b></div></div>');
                    }
                  });
            var dbRef = query(ref(database, "/Arrowcentre tyres limited/wishList/" + userID), limitToLast(8));
            onValue(dbRef, (snapshot) => {
            var wishlistable= document.getElementById('wishlist_menuList');
            wishlistable.innerHTML="";                                
            snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const data = childSnapshot.val();
            var redirect= "\'wishlist.php\'";
            
            wishlistable.innerHTML='<tr><td colspan="2" class="prod-column before_tb"><div class="column-box"><div class="prod-thumb"><a href="#"><img style="width: 50px;height:auto;" src="'+data.itemPhoto+'" alt=""/>&nbsp; '+data.itemDescription+'</a></div></div></td><td><div class="remove"><div onclick="location.assign('+redirect+');" class="checkbox"><label><span  style="color:yellow;"  class="fa fa-eye removeWish"></span></label></div></div></td></tr>'+wishlistable.innerHTML;
            })
        });
        
        var dbRef = ref(database, "/Arrowcentre tyres limited/wishList/" + userID);
        onValue(dbRef, (snapshot) => {
            var count = snapshot.exists() && Object.keys(snapshot.val()).length || 0;
            $('#badge_wishlist').text(count);
            if(count > 9){
            $('#badge_wishlist').text('9+');
        }
        }, {
            onlyOnce: true
        }); 
        var dbRef = ref(database, "/Arrowcentre tyres limited/cartList/" + userID);
        onValue(dbRef, (snapshot) => {
            var countCartList = snapshot.exists() && Object.keys(snapshot.val()).length || 0;
            $('#badge_cart').text(countCartList);
        }, {
            onlyOnce: true
        });
    } else {
        $(".HideSomeCommentFields").removeAttr('readonly');
      }
})
}
$(window).on('load', function () {
    
    

    if(localStorage.getItem('userID') ===null){
      //
                }else{
        
        
        
            var expires;
            var name="wishlistable";
            var days ="10";
            var value=localStorage.getItem('userID');
            if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)),expires = "; expires=" + date.toGMTString();
        
            
            }
            else {
            expires = "";
            }
            document.cookie = escape(name) + "=" + 
            escape(value) + expires + "; path=/";
             }
    
    

    countDownDate2();topNBottomContent();
    $('.preloader').fadeOut();
    check();
    var dbRef = ref(database, '/Arrowcentre tyres limited/pages/Index/Our Services');
    onValue(dbRef, (snapshot) => {
        var services_nav=document.getElementById('services_nav');
        services_nav.innerHTML="";
        var serviceID="\'serviceID\'";
        var serviceID1="\'scrib\'";
        var redirect="\'\'";
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        var data = childSnapshot.val();
        services_nav.innerHTML='<li id="'+childKey+'"  onclick="localStorage.setItem('+serviceID+',this.id),localStorage.setItem('+serviceID1+',this.id),location.replace('+redirect+')"><a  href="#">'+data.topic+'</a></li>'+services_nav.innerHTML;





        
})
})
if(document.getElementById('service-lists')!=null){
var dbRef3 = ref(database, '/Arrowcentre tyres limited/pages/Index/Our Services');
onValue(dbRef3, (snapshot) => {
    var services_nav=document.getElementById('service-lists');
    services_nav.innerHTML="";
    var serviceID="\'serviceID\'";
    var serviceID1="\'scrib\'";
    var id = localStorage.getItem('serviceID');
    snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    var data = childSnapshot.val();
    if(data.topic==id){
        services_nav.innerHTML=' <li  class="active" style="cursor:pointer;"  id="'+childKey+'" onclick="localStorage.setItem('+serviceID+',this.id),localStorage.setItem('+serviceID1+',this.id),location.reload()"><a href="#">'+data.topic+'</a></li>'+services_nav.innerHTML;
    }else{
    services_nav.innerHTML=' <li style="cursor:pointer;"  id="'+childKey+'" onclick="localStorage.setItem('+serviceID+',this.id),localStorage.setItem('+serviceID1+',this.id),location.reload()"><a href="#">'+data.topic+'</a></li>'+services_nav.innerHTML;
    }
        })
        })
    }



    
})



function countDownDate2() {
    var dbRef = ref(database, '/Arrowcentre tyres limited/offers')
    onValue(dbRef, (snapshot) => {
        var data = snapshot.val();
       
        var offer2 = data.deadline.trim();
        var countDownDate3 = new Date(offer2).getTime();
        var y = setInterval(function() {

            $('#promocade_desc').text('Copy Promo Code');
            $('#promocade').text(data.offer_code);

            var now3 = new Date().getTime();
            var distance3 = countDownDate3 - now3;
            var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
           
            if(days < 10){
                $('#days2').text("0"+days);
            }else{
                $('#days2').text(days);
            }
          

            if(minutes < 10){
                $('#minutes2').text("0"+minutes);
            }else{
                $('#minutes2').text(minutes);
            }

       
            if(hours < 10){
                $('#hours2').text("0"+hours);
            }else{     
                $('#hours2').text(hours);}

            if(seconds < 10){
                $('#seconds2').text("0"+seconds);
            }else{            $('#seconds2').text(seconds);
        }
            if (distance3 < 0) {
                clearInterval(y);
                $('#days2').text('00');
                $('#minutes2').text('00');
                $('#hours2').text('00');
                $('#seconds2').text('00');
                $('#promocade').text('Sorry \:\(');
                $('#promocade_desc').text('Offer Expired!');

                if(distance3<-1){
                    var dbRef = ref(database, '/Arrowcentre tyres limited/Company Info');
                    onValue(dbRef, (snapshot) => {
                    
                        const data = snapshot.val();
                    $('.header-area').html(' <div class="container">'+
    '<div class="row">'+
        '<div class="col-md-12">'+
            
           ' <div class="header-contact-info pull-left">'+
               ' <ul>'+
                    '<li>'+
                        '<div class="icon-holder">'+
                          '  <span class="flaticon-tool"></span>'+
                        '</div>'+
                        '<div class="text-holder">'+
                           ' <h3>Address:</h3>  '+
                            '<span>'+data.location+'</span> ' +
                       ' </div>'+
                  '  </li>'+  '<li>'+
                  '<div class="">'+
                    '  <span class="flaticon"></span>'+
                  '</div>'+
                  '<div class="text-holder">'+
                    
                 ' </div>'+
            '  </li>'+
                    '<li>'+
                        '<div class="icon-holder">'+
                          '  <span class="flaticon-write"></span>'+
                        '</div>'+
                        '<div class="text-holder">'+
                           ' <h3>Email:</h3>  '+
                            '<span>'+data.email+'</span> ' +
                       ' </div>'+
                  '  </li>'+
               ' </ul> '  + 
            '</div> '+
            '<div class=" appoinment-button pull-right">'+
            '<a class="ff" title="Calculate / Compare tyre dimensions" href="./tyre-size-calculator.html">Calculate / Compare tyre dimensions</a>'+
        '</div>'+
      '  </div>'+
   ' </div>'+
'</div>');

    
            })}           }})




        })}



      /*  document.addEventListener('contextmenu', event => event.preventDefault());

        ////////////////////////////////////////////////////////////////
        window.addEventListener('contextmenu', function (e) {
            //   // do something here... 
              e.preventDefault();
             }, false);
          
          
            /*----------- 21. Inspect Element Disable ----------*/
            /*
            document.onkeydown = function (e) {
              if (event.keyCode == 123) {
                return false;
              }
              if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;
              }
              if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                return false;
              }
              if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                return false;
              }
              if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
              }
            }
          */