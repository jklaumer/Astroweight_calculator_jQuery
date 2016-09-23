// $(document).ready(function(){

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

$.each(planets, function(index, value) {
    $('<option/>').val(value[1]).html(value[0]).appendTo('#myPlanets');
})

$("#calculateButton").click(function() {
    var myWeight = $("#userWeight").val();
    var myPlanetSelection = $("#myPlanets option:selected").html();
    var myGravity = $("#myPlanets option:selected").val();
    var myResult = myWeight * myGravity;
    $("#myOutput").text("If you were on " + myPlanetSelection + ", you would weigh: " + Math.round(myResult) + " lbs!");

})

