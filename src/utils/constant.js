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

export const Light_Like_Thumb =
  "https://toppng.com/uploads/thumbnail/like-thumb-up-vote-comments-vote-icon-11563607354hfsitrepaa.png";

export const Dark_Like_Thumb =
  "https://www.freeiconspng.com/thumbs/like-icon-png/white-like-icon-png-20.png";

export const Light_Unlike_Thumb =
  "https://cdn-icons-png.flaticon.com/512/20/20661.png";

export const Dark_Unlike_Thumb = "https://pngimg.com/d/dislike_PNG27.png";

export const Light_User_Icon =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const Dark_User_Icon =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

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
