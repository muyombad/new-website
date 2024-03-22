
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
    set,limitToFirst,
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



$(window).on('load', function () {
var dbRef = query(ref(database, '/Arrowcentre tyres limited/pages/Index/Our Services'),limitToLast(4));
var dbRef2 = query(ref(database, '/Arrowcentre tyres limited/pages/Index/Our Services'),limitToFirst(2));

onValue(dbRef, (snapshot) => {

    var services_nav=document.getElementById('serviceID');
    services_nav.innerHTML="";


    var serviceID="\'serviceID\'";
    var serviceID1="\'scrib\'";
    var redirect="\'\'";
    snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    var data = childSnapshot.val();
    services_nav.innerHTML='<div style="cursor:pointer;"  id="'+childKey+'" onclick="localStorage.setItem('+serviceID+',this.id),localStorage.setItem('+serviceID1+',this.id),location.replace('+redirect+')" class="col-lg-3 col-md-3 col-sm-6 col-xs-12">'+
        '<div class="single-service-item text-center">'+
            '<div class="img-holder">'+
               '<img src="'+data.photo1+'" alt="'+data.topic+' Image">'
            + ' <div class="overlay-style-one">'
                 +  ' <div class="box">'
                     + '  <div class="content">'
                           + '<a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>'
                        +'</div>'
                   + '</div>'
               + '</div>'
           + '</div>'
           +' <div class="text-holder">'
                +'<a href="#"><h3>'+data.topic+'</h3></a>'
                +'<p>'+data.broadDesc.substring(0,120)+'... <span style="color:darkblue;"> more &nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></span></p>'
           +' </div>'
      +'  </div>'
    +'</div>'+services_nav.innerHTML;
   
    
    
    
    
    
        })

        })


    onValue(dbRef2, (snapshot) => {

    var services_nav=document.getElementById('serviceID_2');
    services_nav.innerHTML="";


    var serviceID="\'serviceID\'";
    var serviceID1="\'scrib\'";
    var redirect="\'\'";
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        var data = childSnapshot.val();
        services_nav.innerHTML='<div style="cursor:pointer;"  id="'+childKey+'" onclick="localStorage.setItem('+serviceID+',this.id),localStorage.setItem('+serviceID1+',this.id),location.replace('+redirect+')" class="col-lg-3 col-md-3 col-sm-6 col-xs-12">'+
            '<div class="single-service-item text-center">'+
                '<div class="img-holder">'+
                   '<img src="'+data.photo1+'" alt="'+data.topic+' Image">'
                + ' <div class="overlay-style-one">'
                     +  ' <div class="box">'
                         + '  <div class="content">'
                               + '<a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>'
                            +'</div>'
                       + '</div>'
                   + '</div>'
               + '</div>'
               +' <div class="text-holder">'
                    +'<a href="#"><h3>'+data.topic+'</h3></a>'
                    +'<p>'+data.broadDesc.substring(0,120)+'... <span style="color:darkblue;"> more &nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></span></p>'
               +' </div>'
          +'  </div>'
        +'</div>'+services_nav.innerHTML;
       
    
    
    
    
    
    })

    })


    
    

})

