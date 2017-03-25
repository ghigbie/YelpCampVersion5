const mongoose = require("mongoose");

//self-created exports
const Campground = require("./models/campground"),
      Comment    = require("./models/comment");
      
var data = [
    {
        name: "Cloud's Rest",
        image: "http://i.imgur.com/nGSZnHN.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus ligula, euismod at quam in, imperdiet laoreet lacus. Cras varius eget quam dapibus maximus. Vivamus lacinia nec leo non pharetra. Curabitur ante velit, pharetra non tortor ut, ornare hendrerit velit. Sed ut massa auctor, vehicula leo at, placerat enim. Ut eget sapien auctor, laoreet neque eu, molestie lacus. Pellentesque tincidunt purus ac mauris mattis feugiat. Fusce volutpat tincidunt sodales. Ut et nulla ac quam porta ultrices sed ultricies sem. Suspendisse sem dui, scelerisque vel purus aliquet, porttitor interdum velit."
    },
    {
        name: "Granite Mountain's Rest",
        image: "https://s-media-cache-ak0.pinimg.com/originals/9a/85/d8/9a85d8b22e42dd423da0afce92b43d28.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus ligula, euismod at quam in, imperdiet laoreet lacus. Cras varius eget quam dapibus maximus. Vivamus lacinia nec leo non pharetra. Curabitur ante velit, pharetra non tortor ut, ornare hendrerit velit. Sed ut massa auctor, vehicula leo at, placerat enim. Ut eget sapien auctor, laoreet neque eu, molestie lacus. Pellentesque tincidunt purus ac mauris mattis feugiat. Fusce volutpat tincidunt sodales. Ut et nulla ac quam porta ultrices sed ultricies sem. Suspendisse sem dui, scelerisque vel purus aliquet, porttitor interdum velit."
    },
    {
        name: "Lake's End",
        image: "http://www.lake-lewisville.org/wp-content/uploads/2012/07/Sycamore-Bend-Campgrounds-2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus ligula, euismod at quam in, imperdiet laoreet lacus. Cras varius eget quam dapibus maximus. Vivamus lacinia nec leo non pharetra. Curabitur ante velit, pharetra non tortor ut, ornare hendrerit velit. Sed ut massa auctor, vehicula leo at, placerat enim. Ut eget sapien auctor, laoreet neque eu, molestie lacus. Pellentesque tincidunt purus ac mauris mattis feugiat. Fusce volutpat tincidunt sodales. Ut et nulla ac quam porta ultrices sed ultricies sem. Suspendisse sem dui, scelerisque vel purus aliquet, porttitor interdum velit."
    }
    ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        
    //add a few campgrounds
        data.forEach(function(seed){  //this is inside of the callback so that to keep it called in the right order
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("Added a campgroud.");
                    //create a comment on each created campground
                    Comment.create(
                        {
                            text: "This place is great, but I wish it had wifi :)",
                            author: "Homer of the Illiad"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                        });
                }
            });
        });
    });
    
    //add a few comments
}

module.exports = seedDB;    