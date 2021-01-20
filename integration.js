const API_KEY = "AIzaSyAeUq498ul0-WgkGuf5bsYvrcBMXt7OVnU";
const API_URL = "https://youtube.googleapis.com/youtube/v3/search";
const API = `${API_URL}?key=${API_KEY}`;
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};

// const fetchingVideos = async (query, url) => {
//   const response = await fetch(url, options);
//   return response.json();
// };

// const data = fetchingVideos(query, API_URL);
// data.items;
/*
{
    items: {
        name:
        link:
        description
    }
}
*/

const $youtubeSearch = document.querySelector(".js-youtube-search");

$youtubeSearch.addEventListener("submit", searchYoutube);

function searchYoutube(ev) {
  ev.preventDefault();

  const query = ev.target.youtube.value;
  const search = `${API}&part=snippet&maxResults=20&q=${query}`;

  fetch(search)
    .then((rest) => rest.json())
    .then((data) => console.warn(data))
    .catch((err) =>
      console.error("Error when getting the videos from youtube: ", err)
    );
}
