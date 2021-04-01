document.write("Hello World!");

function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello"+ response+",have a good day!");
}

function add(a,b){
  return a + b;
 }
 console.log(add(20,30));
 console.log(add(100,30));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontsize="25px";
  x.style.color="red";
}

var movies = ["Avengers","Captain Marvel","Black panther","Spiderman"];
movies[0]="Wonder Women";
movies.push("Avengers");
movies.pop();
console.log(movies);

var movie={
  title:"Captain Marvel",
  time:"2pm"
}
alert(movie.title);
movie.status="available";
console.log(movie);

var fruits = [];
for(i=1;i<10;i++){
  fruits[i]= prompt("Enter a fruit:");
}
alert("The fruits contains: "+fruits);

var movieDetails = [
  {title: "Avengers",
  time:"12pm",
  status: "available"},
   {title: "Captain Marvel",
   time:"2pm",
   status: "unavailable"},
   {title: "Black Panther",
   time:"4pm",
   status: "available"},
   {title: "Spiderman",
    time:"6pm",
   status: "available"}
 ];

for (var movie of movieDetails){
  if (movie.status === "available"){
    console.log("The movie " + movie.title + " plays at " + movie.time)
  } else{
    console.log("Sorry, the movie " + movie.title + " is sold out.")
  }
};
