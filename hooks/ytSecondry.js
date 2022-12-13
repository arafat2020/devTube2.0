const axios = require("axios");

function ytSecondry({ term, filter }) {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: `${term ? term : "Progarmming"}`,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: `${filter ? filter : "date"}`,
    },
    headers: {
      "X-RapidAPI-Key": "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return;
    });
}

export default ytSecondry;
