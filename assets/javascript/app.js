$(document).ready(function(){



var gif = ["cat", "dog", "rabbit", "hamster", "bird", "ferret", "turtle"]

function displaygif(){
    $("#main").empty();
	var name = $(this).attr("data-name");
    var rating = "";
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
        	url: queryURL,
        	method: 'GET'

        	
        })
        	.done(function(response){
        	for (i=0; i < response.data.length; i++) {
                var img = $("<div>");
                var text = $("<div>");  
                $(text).text("Rating: " + response.data[i].rating);
                $(img).append(text);
                $(img).append("<img src ='" + response.data[i].images.fixed_height_still.url + "'>");
                $("#main").append(img);
        }

                $("img").click(function () {
                    var query = $(this).attr("src")
                    var static = "";
                    var moving = "";
                            

                            if (query.includes("_s")) {
                            

                                moving = query.replace("_s", "");
                                $(this).attr("src", moving);
                            }
                            else if (!query.includes("_s")) {
                            
                                static = query.slice(0, -4);
                                static = queryURLstatic + "_s.gif";
                                $(this).attr("src", static);
                            }
                }); 

        });
}

function renderButtons (){   
        $("#buttons").empty();

        
        for (var i = 0; i < gif.length; i++) {
            var a = $("<button>");
            a.addClass("topic");
            a.attr("data-name", gif[i]);
            a.text(gif[i]);
            $("#buttons").append(a);
        }
    }

    $("#searchBtn").on("click", function(event){
        event.preventDefault();
        var animal = $("#gifName").val().trim();
        gif.push(animal);

       
        renderButtons();
    });
   
    renderButtons();
    $(document).on("click", ".topic", displaygif);


});

