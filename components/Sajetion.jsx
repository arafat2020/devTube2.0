import { useEffect, useState } from "react";
import Vcard2 from "./Vcard2";
import ScaletonLoader3 from "./ScaletonLoader3";
import { useRouter } from "next/router";

function Sajetion({ _id }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [ld, setLd] = useState(false);
  useEffect(() => {
    setLd(true);
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        relatedToVideoId: _id,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    const getData = async () => {
      await axios
        .request(options)
        .then(function (response) {
          setData(response.data.items);
          setLd(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getData();
  }, [_id]);
  return (
    <div className="flex-grow sm:flex-grow-0 px-2 mt-1 w-full sm:h-screen sm:w-[35%] overflow-y-scroll scrollbar-hide">
      {ld ? (
        <ScaletonLoader3 />
      ) : (
        data?.map((e) => {
          return (
            <div
              className="cursor-pointer"
              key={e.id.videoId}
              onClick={() => router.push(`/watch/${e.id.videoId}`)}
            >
              <Vcard2
                url={e.snippet.thumbnails.default?.url}
                title={e.snippet.title}
                time={e.snippet.publishTime}
                channelame={e.snippet.channelTitle}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Sajetion;
