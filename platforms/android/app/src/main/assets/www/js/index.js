
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

        //When list item is clicked
        $("ul").on("click", "li", function(){
            $(this).toggleClass("completed");
          })


      //when add button is ticked
      $("#add").click(function(){
        
        if ($("#todo").val() !== ""){
          var newToDo = $("#todo").val();
        
          var newLine = $("ul").append("<li><a href='#' class='listItem'>" + newToDo + "</a><a href='#' data-icon='delete' class='deleteBtn'></a></li>");
          $("ul").listview("refresh");
          $("#todo").val("");

          //when delete button is ticked 
          newLine.on('click', '.deleteBtn', function(){
            $(this).parent().remove();
          })

        }else{
          alert("Please enter a task");

        }

      });
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