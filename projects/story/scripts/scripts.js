$(document).ready(function() {
    
    // Start of story:
    $("#dialog").html("<p>It's a holiday weekend and you're staying home in San Francisco. What do you want to do?</p>");

    // Makes choice buttons:
    $("#choices").append('<button id="beach">Go to the beach</button>');
    $("#choices").append('<button id="marin">Bike ride to Marin</button>');

    // Click handler for beach button:
    $("#beach").click(function() {
        $("#dialog").html("<p>Cool! You decide to go to the beach. Which beach do you want to go to?</p>");
        $("#choices").empty();
        $("#choices").append('<button id="baker_beach">Baker Beach</button>');
        $("#choices").append('<button id="ocean_beach">Ocean Beach</button>');

        // Click handler for Baker Beach:
        $("#baker_beach").click(function() {
            $("#dialog").html("<p>You choose to go to Baker Beach. What do you want to do?</p>");
            $("#choices").empty();
            $("#choices").append('<button id="nude">Go to nude beach</button>');
            $("#choices").append('<button id="clothes">Keep your clothes on</button>');

            // Click handler for nude beach:
            $("#nude").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/nude.jpg" alt="people on beach" width="600">');
            });

            // Click handler for clothes on:
            $("#clothes").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/clothes_on.jpg" alt="couple on beach" width="600">');
            });
        });

        // Click handler for Ocean Beach:
        $("#ocean_beach").click(function() {
            $("#dialog").html("<p>You choose to go to Ocean Beach. What do you want to do?</p>");
            $("#choices").empty();
            $("#choices").append('<button id="surf">Surf</button>');
            $("#choices").append('<button id="sunbathe">Sunbathe</button>');

            // Click handler for surf:
            $("#surf").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/surf.jpg" alt="surfer riding waves" width="600">');
            });

            // Click handler for sunbathe:
            $("#sunbathe").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/sunbathe.jpg" alt="mountain summit" width="300" height="500">');
            });
        });

    
    });

    // Click handler for Marin button:
    $("#marin").click(function() {
        $("#dialog").html("<p>Right on! You decide to ride your bike to Marin County. Where do you want to go?</p>");
        $("#choices").empty();
        $("#choices").append('<button id="mt_tam">Mount Tam</button>');
        $("#choices").append('<button id="tennessee">Tennessee Valley</button>');

        // Click handler for Mount Tam:
        $("#mt_tam").click(function() {
            $("#dialog").html("<p>You choose to go to Mount Tam. What do you want to do?</p>");
            $("#choices").empty();
            $("#choices").append('<button id="waterfalls">Hike to waterfalls</button>');
            $("#choices").append('<button id="summit">Hike to summit</button>');

            // Click handler for waterfalls:
            $("#waterfalls").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/waterfall.jpg" alt="waterfalls in woods" width="300" height="500">');
            });

            // Click handler for summit:
            $("#summit").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/summit.jpg" alt="mountain summit" width="600">');
            });
        });

        // Click handler for Tennessee Valley:
        $("#tennessee").click(function() {
            $("#dialog").html("<p>Great! You end up biking to Tennessee Valley. What do you want to do?</p>");
            $("#choices").empty();
            $("#choices").append('<button id="beach">Walk to beach</button>');
            $("#choices").append('<button id="go_home">Go home</button>');

            // Click handler for walk to beach:
            $("#beach").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/beach.jpg" alt="beach scene" width="300" height="500">');
            });

            // Click handler for go home:
            $("#go_home").click(function() {
                $("#dialog").empty();
                $("#choices").empty();
                $("#choices").append('<img src="images/san_francisco.jpg" alt="San Francisco street scene" width="600">');
            });
        });
    });
});

// how to add an image to your story:
// $(#dialog).append('img src="images/example_img.jpg" alt="Tennessee Valley" width="400px"');