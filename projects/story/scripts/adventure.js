// "San Francisco Staycation!" ==> choose your own adventure story / practice with JavaScript conditionals.

var goToBeach = true;
var bikeToMarin = false;
var neighborhoods = false;

console.log("It's a holiday weekend and you're staying home in San Francisco. What do you want to do?");

if (goToBeach) {
    console.log("Cool! You decide to go to the beach.");
    console.log("Which beach do you want to go to?");

    var bakerBeach = false;
    var oceanBeach = false;
    var crissyField = true;

    if (bakerBeach) {
        console.log("You choose to go to Baker Beach.");
        console.log("Now you have to decide which part of the beach to go to: nude or clothing-mandatory.");

        var clothesOn = false;

        if (clothesOn) {
            console.log("You feel like trying something new and stip naked on the nude beach.");
        } else {
            console.log("You'd prefer to keep your clothes on today; it's pretty chilly in San Francisco.");
        }

    } else if (oceanBeach){
        console.log("You decide to take Muni to Ocean Beach.");
        console.log("Once you get to Ocean Beach, you have two options: surf or sunbathe.");
        
        var surf = true;

        if (surf) {
            console.log("You splurge and decide to pay for surfing lessons. The waves are awesome and you have a great time!");
        } else {
            console.log("You're in a mellow mood and take advantage of a rare sunny day in San Francisco. You sunbathe for a few hours at Ocean Beach.");
        }

    } else if (crissyField){
        console.log("You make your way to Baker Beach but get lost and eventually find your way to Crissy Field.");
        console.log("Once you find yourself at Crissy Field you have two choices: continue walking to Fisherman's Wharf for clam chowder or go for a cup of coffee at the Warming Hut.");

        var warmingHut = true;

        if (warmingHut) {
            console.log("You hang out at the Warming Hut and have a cup of coffee while enjoying the view of the Golden Gate Bridge.");
        } else {
            console.log("You walk to Fisherman's Wharf and enjoy a bowl of clam chowder.");
        }

    } else {
        console.log("");
    }

} else {
    console.log("You decide to skip the beach and work on Mission Techies homework instead.");
}