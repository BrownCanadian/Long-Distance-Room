


const firebaseConfig = {
  apiKey: "AIzaSyB7JRWVOZVizEzaF_RCKNHaNleA9cUuQok",
  authDomain: "valentine-747aa.firebaseapp.com",
  projectId: "valentine-747aa",
  databaseURL: "https://valentine-747aa-default-rtdb.firebaseio.com",
  storageBucket: "valentine-747aa.appspot.com",
  messagingSenderId: "40010346134",
  appId: "1:40010346134:web:bce837054ed41fddd9dcb7",
  measurementId: "G-T9PTJ0VT4T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//send text

var lovePhrases = [
  "I love you", // English
  "Je t'aime", // French
  "Te quiero", // Spanish
  "Ich liebe Dich", // German
  "Ti amo", // Italian
  "Eu te amo", // Portuguese
  "Я люблю тебя", // Russian
  "我爱你", // Chinese (Mandarin)
  "愛してる", // Japanese
  "أحبك", // Arabic
  "माँ तिमिर्हनुहोस्", // Nepali
  "Saya cinta kamu", // Indonesian
  "Ya tabe khu", // Pashto
  "Ek het jou lief", // Afrikaans
  "Jag älskar dig", // Swedish
  "Tôi yêu em", // Vietnamese
  "Szeretlek", // Hungarian
  "Σ'αγαπώ", // Greek
  "Kocham cię", // Polish
  "Eu te iubesc", // Romanian
  "Я тебе кахаю", // Ukrainian
  "Обичам те", // Bulgarian
  "Mīlu tevi", // Latvian
  "Aš tave myliu", // Lithuanian
  "Më dua", // Albanian
  " ja те сакам", // Macedonian
  "Miluji tě", // Czech
  "Jeg elsker deg", // Norwegian
  "Kärleken till dig", // Swedish
  "Szeretlek", // Hungarian
  "Asante sana", // Swahili
  "Ik hou van jou", // Dutch
  "Szeretlek", // Hungarian
  "Aşkım seni", // Turkish
  "Ako ay mahal kita", // Tagalog
  "प्यार हम तुमसे करते हैं", // Hindi
  "Aku cinta kamu", // Indonesian
  "Jag älskar dig", // Swedish
  "Tôi yêu em", // Vietnamese
  "Szeretlek", // Hungarian
  "Σ'αγαπώ", // Greek
  "Kocham cię", // Polish
  "Eu te iubesc", // Romanian
  "Я тебе кахаю", // Ukrainian
  "Обичам те", // Bulgarian
  "Mīlu tevi", // Latvian
  "Aš tave myliu", // Lithuanian
  "Më dua", // Albanian
  " ja те сакам", // Macedonian
]



let id = "rec"

function confirm(){
    randomlove()
    var code = document.getElementById("pass").value;
    if(code == 2022){
        id = "Nikita";
    }
    else if(code==2023){
        id="Rushaan";
    }
    else{
        alert("no authorization");
        return
    }
    console.log(id);
    document.getElementById('enter').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
}




function send(){
    
    console.log("Sent text");
    var message = document.getElementById("text").value;
    if(message ==""){
      return false;
    }
    database.ref("messages").push().set({
        "message": message,
        "id" : id
    })

   document.getElementById("text").value = "";
   return false  
}



firebase.database().ref("messages").on("child_added",function(snapshot){
    var html="";
    html+="<li ";
    html+="id=\"";
    html+=snapshot.val().id; 
    html+="\">"
    html+=snapshot.val().message;
    html+="</li>"
    console.log(html);
    document.getElementById("mes").innerHTML+=html;
})



async function searchGIFs(searchTerm) {
    const apiKey = "wJF5PU5lDLzzQmbS88XoaW782Y2bpaMs";
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const data_lentgh = data.data;
      console.log(data_lentgh);
      const link = data.data[gif_api_rand].images.original.url;
      console.log(link)
      const imgElement = document.getElementById("gify");
      imgElement.setAttribute("src", link);
      
    } catch (error) {
      console.error(error);
    }
  }
  
  const gif_array = ['love','romane','cute', 'girlfriend','horny','suckingW','sex','cuddle','kiss','propose','dating'];
  const gif_api_rand = Math.floor(Math.random() * 15);
  const gif_tit_api = Math.floor(Math.random() * 11);
  var title = gif_array[gif_tit_api];
  
  // Call the function to search for GIFs
  searchGIFs(title);


  function updateTimeSinceBirthday() {
    // Set the date and time of your birthday
    var birthday = new Date(2021, 08, 23, 20, 46, 0); // Jan 9, 2022 8:46pm
   
    // Get the current time
    var currentTime = new Date();
    
    // Calculate the time difference in milliseconds
    var timeDiff = currentTime - birthday;
    
    // Convert the time difference from milliseconds to seconds
    var timeDiffInSeconds = Math.floor(((timeDiff / 1000)/60)/1440);
    
    // Update the text on the website with the time difference in seconds
    document.getElementById("time_since").innerHTML =timeDiffInSeconds ;
  }
  
  // Call the updateTimeSinceBirthday function every second
  setInterval(updateTimeSinceBirthday, 1000);

  var dateIdeas = [  "Watch a movie together on a video call",  "Have a virtual cooking class",  "Play an online game together",  "Plan a virtual trip together",  "Have a virtual wine or beer tasting",  "Read a book together and discuss it over a call",  "Take an online dance class together",  "Plan a virtual scavenger hunt",  "Have a virtual spa day",  "Plan a virtual picnic",  "Take an online fitness class together",  "Have a virtual karaoke night",  "Plan a virtual DIY project",  "Have a virtual art class together",  "Take an online language class together",  "Have a virtual happy hour",  "Watch a live concert together on a video call",  "Plan a virtual road trip",  "Have a virtual museum tour",  "Take an online photography class together",  "Plan a virtual hike",  "Have a virtual cooking competition",  "Take an online mixology class together",  "Plan a virtual theme night",  "Have a virtual trivia night",  "Take an online knitting class together",  "Plan a virtual potluck",  "Have a virtual game night",  "Take an online gardening class together",  "Plan a virtual theme park day",  "Have a virtual wine making class",  "Take an online yoga class together",  "Plan a virtual talent show",  "Have a virtual book club meeting",  "Take an online writing class together",  "Plan a virtual comedy night",  "Have a virtual tea party",  "Take an online nutrition class together",  "Plan a virtual craft night",  "Have a virtual history class",  "Take an online personal finance class together",  "Plan a virtual science experiment night",  "Have a virtual philosophy class",  "Take an online psychology class together",  "Plan a virtual magic night",  "Have a virtual fashion design class",  "Take an online music class together",  "Plan a virtual World Cup night",  "Have a virtual film making class",  "Take an online theater class together",  "Plan a virtual political debate night",  "Have a virtual religion class",  "Take an online history class together",  "Plan a virtual geography night",  "Have a virtual geology class",  "Take an online economics class together",  "Plan a virtual technology night",  "Have a virtual law class",  "Take an online literature class together",  "Plan a virtual astronomy night"];
 
  var randomIndex = Math.floor(Math.random() * dateIdeas.length);
  
  function generateidea(ideas){
    var randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById("date_idea").innerHTML = ideas[randomIndex];
  }

  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("send_text").click();
    }
  });

  let movie_list = Cookies.getJSON("websites");

  function add_movie() {
    console.log('added');
    let movieInput = document.getElementById("movie_input").value;
    let moviesRef = firebase.database().ref("movies");
    moviesRef.push(movieInput); // Save the updated list of movies in the cookie
  }

  function movie_watched() {
    movieName = document.getElementById("movie_title").value;
    let moviesRef = firebase.database().ref("movies");
    moviesRef.orderByValue().equalTo(movieName).once("value", function(snapshot) {
    snapshot.forEach(function(data) {
    data.ref.remove();
    });
  });
  }

  
  function shuffle_movie() {
    let moviesRef = firebase.database().ref("movies");
    moviesRef.once("value", function(snapshot) {
      let movies = snapshot.val();
      if(movies){
          let moviesArr = Object.values(movies);
          let randomIndex = Math.floor(Math.random() * moviesArr.length);
          let randomMovie = moviesArr[randomIndex];
          document.getElementById("movie_title").innerHTML = randomMovie;
      }else {
          document.getElementById("movie_title").innerHTML = "Sorry, there are no movies in the database";
      }
    });
  }


  function randomlove() {
    var love =  lovePhrases[Math.floor(Math.random() * lovePhrases.length)];
    document.getElementById("love_lang").innerHTML = love;
  }
  // to add
  //1.Enter to send message
  //2. tick a date idea and get it off arraty