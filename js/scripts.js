$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red-background");
});

$("button#light").click(function() {
  $("body").removeClass();
  $("body").addClass("light-background");
});

$("button#dark").click(function() {
  $("body").removeClass();
  $("body").addClass("dark-background");

});

$("p").click(function() {
  $("p").removeClass();
  $("p").addClass("blue-background");
});

});