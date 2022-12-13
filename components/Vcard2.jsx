import { defaultAvater } from "../dummy_data/movie";
import LazyLoad from "react-lazy-load";
import { truncateString } from "../utils/trunket";

function Vcard2({
  url = defaultAvater,
  title = "something",
  time = Date.now(),
  channelame = "something",
}) {
  const timeago = require("time-ago");
  return (
    <div className="w-full flex justify-around bg-slate-100 p-1 rounded-md mb-2">
      <LazyLoad className="w-[120px] h-[90px]">
      <img className="w-[120px] h-[90px] rounded-md" src={url} alt="" />
      </LazyLoad>
      <div className="w-[53%] flex flex-col items-center justify-around">
        <p className="text-[15px] text-slate-700">{truncateString(title,15)}</p>
        <p className="text-[10px]">{timeago.ago(time)}</p>
        <button className="bg-slate-200 text-slate-700 font-bold rounded-md  px-2 py-1 text-[12px]">{channelame}</button>
      </div>
    </div>
  );
}

export default Vcard2;
