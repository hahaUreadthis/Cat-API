$.ajax({
  url: "https://api.thecatapi.com/v1/images/search",
  type: "GET",
  dataType: "json",
  success: function(result){
    // console.log(result[0].description);
    // console.log(result);
    getCat(result);
    getBreed(result);
    getId(result);
    getTemp(result);
    getDes(result);
    // getSelect(result);
    
  }
})

function getCat(data){
  var imgURL = data[0].url;
  var img = document.getElementById("catIMG");
  img.setAttribute("src", imgURL);
  img.setAttribute("width", "50%");
  img.setAttribute("height", "50%");
  img.append(imgURL);
  $("#meow").append(img);
  return img
}

function getDes(data){
  var p = document.getElementById("catDes");
  var des = "Unknown";  
  if( data[0].breeds.length > 0)
    des = data[0].breeds[0].description;
   var apple = "Description: ";
   p.append(apple);
   p.append(des);
  $("#meow").append(p)
  return p;
}
 
function getId(data){
  var p = document.getElementById("catID");
  p.innerHTML = "";
  var id = data[0].id;
  var tofu = "ID: ";
  p.append(tofu);
  p.append(id);
  $("#meow").append(p)
  return p ;
}

function getBreed(data){
  var p = document.getElementById("catBreed");
  var breed = "Unknown";
  if( data[0].breeds.length > 0)
     breed = data[0].breeds[0].name;
  // var breed = data[0].breeds[0].name;
  var bread = "Breed: ";
  p.append(bread);
  p.append(breed);
  $('#meow').append(p);
  return p;
}

function getTemp(data){
  var p = document.getElementById("catTemp");
  var temp = "Unknown";
  if( data[0].breeds.length > 0)
     temp = data[0].breeds[0].temperament;
  var tea = "Temperament: ";
  p.append(tea);
  p.append(temp);
  $('#meow').append(p);
  return p;
}

function butt(){
  var e = document.getElementById("tofu");
  // var strUser = e.options[e.selectedIndex].value;
  var strUser = e.value;
  var breedAPIurl = "https://api.thecatapi.com/v1/breeds/search?q=" + strUser;
  // console.log(breedAPIurl);
  
  $.ajax({
    url: breedAPIurl,
    type: "GET",
    dataType: "json",
    success: function(data){
      console.log(data);
      getCat(data);
      // getBreed(data);
      getId(data);
      getTemp(data);
      getDes(data);
    }
  })
}