// export const buttonNames = [
//   "All",
//   "Mixes",
//   "Music",
//   "Computer programming",
//   "Mantras",
//   "Lo-fi",
//   "Stock markets",
//   "Startup company",
//   "Podcasts",
//   "Live",
//   "Playlists",
//   "Sales",
//   "Debates",
//   "Bollywood Music",
//   "Comedy",
//   "Recently uploaded",
//   "Watched",
//   "Next to you",
// ];

export const buttonNames = [
  "All",
  "Mixes",
  "Music",
  "Mantras",
  "Podcasts",
  "Lo-fi",
  "Live",
  "Playlists",
  "Comedy",
  "Recently uploaded",
  "Watched",
  "Next to you",
];

const My_Youtube_Api_Key = process.env.REACT_APP_YOUTUBE_API_KEY;

export const Youtube_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  My_Youtube_Api_Key;

export const Youtube_Search_Suggestion_API =
  "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=";
