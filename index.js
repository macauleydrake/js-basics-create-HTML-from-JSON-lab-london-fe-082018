document.addEventListener("DOMContentLoaded", (e) => {
  
  const Titanic = document.getElementById("Titanic")
  function TitanicFunction(){
    document.getElementById("title").innerHTML = movies.Titanic.title
    document.getElementById("director").innerHTML = movies.Titanic.director
    document.getElementById("genre").innerHTML = movies.Titanic.genre
    document.getElementById("filmRating").innerHTML = movies.Titanic.filmRating
    document.getElementById("poster").innerHTML = movies.Titanic.poster
    document.getElementById("audienceScore").innerHTML = movies.Titanic.audienceScore
    document.getElementById("description").innerHTML = movies.Titanic.description
    document.getElementById("cast").innerHTML = ""
    for(var actor in movies["Titanic"].cast) {
      console.log(actor)
      document.getElementById("cast").innerHTML += "<p>"
      document.getElementById("cast").innerHTML += movies["Titanic"].cast[actor].actor
      document.getElementById("cast").innerHTML += ": "
      document.getElementById("cast").innerHTML += movies["Titanic"].cast[actor].role
      document.getElementById("cast").innerHTML += "</p>"
    }
     
    document.getElementById("reviews").innerHTML = ""
    for(var review in movies["Titanic"].reviews) {
      console.log(review)
      document.getElementById("cast").innerHTML += "<p>"
      document.getElementById("reviews").innerHTML += " "
      document.getElementById("reviews").innerHTML += movies["Titanic"].reviews[review].username
      document.getElementById("reviews").innerHTML += ": "
      document.getElementById("reviews").innerHTML += movies["Titanic"].reviews[review].content
      document.getElementById("reviews").innerHTML += "</p>"
    }
  }
  Titanic.addEventListener("click", ()=>TitanicFunction())
  
  
  
  const Terminator = document.getElementById("Terminator 2")
  function TerminatorFunction(){
    document.getElementById("title").innerHTML = movies["Terminator 2"].title
    document.getElementById("director").innerHTML = movies["Terminator 2"].director
    document.getElementById("genre").innerHTML = movies["Terminator 2"].genre
    document.getElementById("filmRating").innerHTML = movies["Terminator 2"].filmRating
    document.getElementById("poster").innerHTML = movies["Terminator 2"].poster
    document.getElementById("audienceScore").innerHTML = movies["Terminator 2"].audienceScore
    document.getElementById("description").innerHTML = movies["Terminator 2"].description
    document.getElementById("cast").innerHTML = ""
    for(var actor in movies["Terminator 2"].cast) {
      console.log(actor)
      document.getElementById("cast").innerHTML += "<p>"
      document.getElementById("cast").innerHTML += movies["Terminator 2"].cast[actor].actor
      document.getElementById("cast").innerHTML += ": "
      document.getElementById("cast").innerHTML += movies["Terminator 2"].cast[actor].role
      document.getElementById("cast").innerHTML += "</p>"
    }
     
 document.getElementById("reviews").innerHTML = ""
    for(var review in movies["Terminator 2"].reviews) {
      console.log(review)
      document.getElementById("cast").innerHTML += "<p>"
      document.getElementById("reviews").innerHTML += " "
      document.getElementById("reviews").innerHTML += movies["Terminator 2"].reviews[review].username
      document.getElementById("reviews").innerHTML += ": "
      document.getElementById("reviews").innerHTML += movies["Terminator 2"].reviews[review].content
      document.getElementById("reviews").innerHTML += "</p>"
    }
  }
  
  
   Terminator.addEventListener("click", ()=>TerminatorFunction())
  
});
