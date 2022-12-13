import axios from "axios";

function ytReasult({term, pageToken, filter}) {
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=${
    filter ? filter : "relevance"
  }${pageToken ? `&pageToken=${pageToken}` : ""}&q=${
    term ? term : "Programming"
  }&key=AIzaSyB0MMLZi3FHAOtFfeb3CfzTu9LXNkR6EaU `;
  return axios
    .get(searchUrl)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err)
      return err;
    });
}

export default ytReasult;
