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

export const comments = [
  {
    name: "Mohit Kumar",
    text: "Amazing ❤️",
    replies: [
      {
        name: "Manjeet Gahlot",
        text: "Incredible one that I have ever seen on internet.",
        replies: [
          {
            name: "Himanshu Kumar",
            text: "Same as raghvan kumari's comment❤️",
            replies: [
              {
                name: "Raja Sagar",
                text: "Love it❤️",
                replies: [
                  {
                    name: "Himanshu Kumar",
                    text: "Same as raghvan kumari's comment❤️",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Raghvan Kumar",
        text: "It is like the one which gives an important thing that's 'hope😇'",
        replies: [],
      },
    ],
  },
  {
    name: "Manjeet Gahlot",
    text: "Incredible one that I have ever seen on internet.",
    replies: [],
  },
  {
    name: "Raghvan Kumar",
    text: "It is like the one which gives an important thing that's 'hope😇'",
    replies: [
      {
        name: "Raja Sagar",
        text: "Love it❤️",
        replies: [
          {
            name: "Himanshu Kumar",
            text: "Same as raghvan kumari's comment❤️",
            replies: [
              {
                name: "Prerna Aarya",
                text: "This gives me an inspiration ",
                replies: [],
              },
            ],
          },
        ],
      },

      {
        name: "Himanshu Kumar",
        text: "Same as raghvan kumari's comment❤️",
        replies: [],
      },
      { name: "Bhumi Dodwani", text: "Nice one 👍", replies: [] },
    ],
  },
  { name: "Raja Sagar", text: "Love it❤️", replies: [] },
  { name: "Prerna Aarya", text: "This gives me an inspiration ", replies: [] },
  {
    name: "Bhumi Dodwani",
    text: "Nice one 👍",
    replies: [
      {
        name: "Raja Sagar",
        text: "Love it❤️",
        replies: [
          {
            name: "Prerna Aarya",
            text: "This gives me an inspiration ",
            replies: [
              {
                name: "Himanshu Kumar",
                text: "Same as raghvan kumari's comment❤️",
                replies: [
                  { name: "Bhumi Dodwani", text: "Nice one 👍", replies: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
