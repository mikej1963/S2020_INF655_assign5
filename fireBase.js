var app_fireBase = {};
(function(){
    // Initialize Firebase
    var config = {
        apiKey: "TBD",
        authDomain: "tbd.firebaseapp.com",
        databasuURL: "https://tbd.firebase.com",
        storageBucket: "tbd.appspot.com",
        messagingSenderId: "tbd"
    };
    firebase.initializeApp(config);
    app_fireBase = firebase;
})();