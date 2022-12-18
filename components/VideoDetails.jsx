import timeago from "time-ago";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonLoader2 from "./SkeletonLoader2";

function VideoDetails({ id }) {
  const [ld, setld] = useState(false);
  const [details, setDetails] = useState();
  console.log(details);
  useEffect(() => {
    setld(true);
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/videos",
      params: { part: "contentDetails,snippet,statistics", id: id },
      headers: {
        "X-RapidAPI-Key": "394a3dd44emsh21285a08f5c8ed1p10dc1ejsnd855389420f2",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    const getDetails = async () => {
      await axios
        .request(options)
        .then(function (response) {
          setDetails(response.data.items[0]);
          setld(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getDetails();
  }, [id]);
  return (
    <div className="w-full">
      {ld ? (
        <SkeletonLoader2 />
      ) : (
        <div className="w-full text-slate-700">
          <div className="w-full p-1 sm:p-2 flex items-center justify-between">
            <div>
              <p className="text-lg">{details?.snippet.title}</p>

              <p className="text-[10px]">
                {details?.statistics.viewCount} Views {" . "}{" "}
                {timeago.ago(details?.snippet.publishedAt)}
              </p>
              <p className="text-[13px]">
                <span>
                  <ThumbUpIcon fontSize="small" />
                </span>{" "}
                {details?.statistics.likeCount}
              </p>
            </div>
            <div>
              <button className="bg-slate-100 p-1 rounded-full text-slate-700 ">
                <KeyboardArrowDownIcon fontSize="large" />
              </button>
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-between p-2">
            <div>
              <p className="text-[15px] font-bold font-sans">
                {details?.snippet.channelTitle}
              </p>
            </div>
            <div>
              <button className="bg-slate-200 text-slate-700 rounded-md px-2">
                Visit
              </button>
            </div>
          </div>
          <Divider />
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
