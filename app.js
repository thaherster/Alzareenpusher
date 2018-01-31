var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDAYlbYFeGcJ0wiBZDYxWx-470EpxW1SW0",
    authDomain: "alzareen-618d9.firebaseapp.com",
    databaseURL: "https://alzareen-618d9.firebaseio.com",
    projectId: "alzareen-618d9",
    storageBucket: "alzareen-618d9.appspot.com",
    messagingSenderId: "1031896493097"
};
firebase.initializeApp(config);

var database = firebase.database();


database.ref('apkrecords/').push({

    "ChannelName" : "Thaher Media",
    "Code" : "https://firebasestorage.googleapis.com/v0/b/alzareen-618d9.appspot.com/o/alzareen26.mp4?alt=media&token=dd57c8f2-ba0a-47df-ba74-b4df1414e645",
    "ThumbNailUrl" : "",
    "Time" : "PT11M21S",
    "VideoName" : "best super islamic speech new malayalam 2016 latest",
    "Views" : "135904"

});