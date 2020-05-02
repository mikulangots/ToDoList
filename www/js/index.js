
var app = {
    // Application Constructor
    initialize: function() {

        //Cordova Specific Events
        //DeviceReady = Main
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //When user returns to the application
        document.addEventListener('resume', this.pauseListener.bind(this), false);
        //When user moves to another application
        document.addEventListener('pause', this.resumeListener.bind(this), false);

        //Application Events
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        alert("Application is loaded")
    },

    pauseListener: function(){
        alert("Application is paused")
        //save state
    },

    resumeListener: function(){
        alert("Application is resumed")
        //load the saved state and update the UI

    },

    
};

app.initialize();