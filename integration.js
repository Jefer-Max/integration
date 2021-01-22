const API_KEY = "AIzaSyAeUq498ul0-WgkGuf5bsYvrcBMXt7OVnU";
const API_URL = "https://youtube.googleapis.com/youtube/v3/search";
const API = `${API_URL}?key=${API_KEY}`;
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};
const $youtubeSearch = document.querySelector(".js-search");
const youtubeiframe = document.querySelector("#youtubeiframe");
$youtubeSearch.addEventListener("submit", searchYoutube);
//call API
function searchYoutube(ev) {
  ev.preventDefault();
  const query = ev.target.youtube.value;
  const search = `${API}&part=snippet&maxResults=10&q=${query}`;
  fetch(search)
    .then((rest) => rest.json())
    .then((data) => {
      console.log(youtubeiframe);
      youtubeiframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${data.items[0].id.videoId}`
      );
    })
    .catch((err) =>
      console.error("Error when getting the videos from youtube: ", err)
    );
}

//console.warn(data)
//show iframe
if (document.getElementById("open")) {
  var show = document.getElementById("showOpen");
  var btn = document.getElementById("open");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function () {
    show.style.display = "block";
  };
  span.onclick = function () {
    show.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == show) {
      show.style.display = "none";
    }
  };
  window.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      document.getElementById("showOpen").style.display = "none";
    }
  });
}
