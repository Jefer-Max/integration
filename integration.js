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
const searchlist = document.querySelector(".js-music-search");
$youtubeSearch.addEventListener("submit", searchYoutube);

function renderVideo(e) {}

//call API
function searchYoutube(ev) {
  ev.preventDefault();
  searchlist.innerHTML = ""; //limpiar
  const query = ev.target.youtube.value;
  const search = `${API}&part=snippet&maxResults=6&q=${query}&type=video`;
  fetch(search)
    .then((rest) => rest.json())
    .then((data) => {
      console.log(data);

      data.items.forEach((video) => {
        let templatelist = `
        <div>
          <li><button aria-label="${video.snippet.title}" data-id-video="${video.id.videoId}">${video.snippet.title}</button></li>
        </div>`;
        searchlist.insertAdjacentHTML("beforeend", templatelist);
      });
    })
    .catch((err) =>
      console.error("Error when getting the videos from youtube: ", err)
    );
}

searchlist.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    let button = e.target;
    let videoId = button.getAttribute("data-id-video");
    youtubeiframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}`
    );
  }
});

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
