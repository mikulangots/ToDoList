
var app = {
    // Application Constructor
    initialize: function() {

        //Cordova Specific Events
        //DeviceReady = Main
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //When user returns to the application
        document.addEventListener('pause', this.pauseListener.bind(this), false);
        //When user moves to another application
        document.addEventListener('resume', this.resumeListener.bind(this), false);

        //Application Events
        
    },

    

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        alert("Application is loaded")

        let itemList = new Set();

      //when add button is ticked add item to list
      $("#add").click(function(){        
        if ($("#todo").val() !== ""){
          var newToDo = $("#todo").val();        
          var newLine = $("ul").append("<li><a href='#' class='listItem' id='" + newToDo + "'>" + newToDo + "</a><a href='#' data-icon='delete' class='deleteBtn'></a></li>");
          $("ul").listview("refresh");
          $("#todo").val("");

          itemList.add(this.value);

          //when delete button is ticked remove item from list
          newLine.on('click', '.deleteBtn', function(){
            $(this).parent().remove();       
          })

          itemList.delete(this.value);

        }else{
          alert("Please enter a task");
        }

        //save state into local storage
        let listItemText = "";
        for (let item of itemList) {
          listItemText = listItemText + "," + item;
        }
        window.localStorage.setItem("ITEM_LIST", listItemText);
        alert(window.localStorage.getItem("ITEM_LIST"));
        });

      //When list item is clicked toggle complete/incomplete
      $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
      })

     

    },


    //Pause Event Handler
    pauseListener: function(){
        alert("Application is paused")

        //save state into local storage
        let listItemText = "";
        for (let item of "ul") {
          listItemText = listItemText + "," + item;
        }
        window.localStorage.setItem("ITEM_LIST", listItemText);
        alert(window.localStorage.getItem("ITEM_LIST"));


    },


    //Resume Event Handler
    resumeListener: function(){
        alert("Application is resumed")
        //load the saved state and update the UI

    },

    
};

app.initialize();