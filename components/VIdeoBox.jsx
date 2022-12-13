import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ytSecondry from "../hooks/ytSecondry";
import { devContext } from "../provider/DevProvider";
import SkeletonLoader from "./SkeletonLoader";
import Vcard from "./Vcard";
// import Vcard from "./Vcard";
export default function VIdeoBox() {
  const router = useRouter();
  const ctx = useContext(devContext);
  const [ld, setLd] = useState(false);
  const [res, setRes] = useState([]);
  const [fl, setFl] = useState("relevance");

  useEffect(() => {
    setLd(true);
    setRes([]);

    try {
      async function initialLoad() {
        const res = await ytSecondry({ term: ctx.term, filter: fl });
        if (res.items !== "undefined") {
          setRes(res.items);
          setLd(false);
        } else {
          console.log(res);
        }
      }
      initialLoad();
    } catch (error) {
      console.log(error);
      setLd(false);
    }
  }, [ctx.term, fl]);
 
  const filter = [
    "relevance",
    "searchSortUnspecified",

    "date",
    "viewCount",
    "title",
    "videoCount",
  ];
  return (
    <div className="flex-grow h-screen overflow-hidden scrollbar-hide">
      <Stack
        className="overflow-hidden overflow-x-scroll scrollbar-hide"
        direction="row"
        spacing={1}
      >
        {filter.map((e) => {
          return (
            <Chip
              variant={`${fl === e ? "filled" : "outlined"}`}
              key={e}
              className="cursor-pointer"
              label={e}
              onClick={() => {
                setFl(e);
              }}
            />
          );
        })}
      </Stack>
      <div className="flex flex-wrap h-[80%] items-center justify-around mt-2 overflow-hidden overflow-y-scroll scrollbar-hide">
        {ld ? (
          <SkeletonLoader />
        ) : (
          res?.map((e) => {
            return (
              <div
                id="vbox"
                key={e.id.videoId}
                onClick={() => router.push(`/watch/${e.id.videoId}`)}
              >
                <Vcard
                  img={e.snippet.thumbnails.medium?.url}
                  des={e.snippet.description}
                  title={e.snippet.title}
                  date={e.snippet.publishTime}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
