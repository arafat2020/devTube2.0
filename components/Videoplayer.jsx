import ReactPlayer from "react-player";
import VideoDetails from "./VideoDetails";
import VideoLOader from "./VideoLOader";

function Videoplayer({ id }) {
  return (
    <div className="w-full sm:w-[60%]  flex flex-col items-center ">
      <div className="sm:hidden">
        <ReactPlayer
          controls
          wrapper={"div"}
          fallback={<VideoLOader/>}
          width={320}
          height={150}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <div className="hidden sm:inline-flex md:hidden">
        <ReactPlayer
          controls
          wrapper={"div"}
          fallback={<VideoLOader/>}
          width={400}
          height={230}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <div className="hidden md:inline-flex lg:hidden">
        <ReactPlayer
          controls
          wrapper={"div"}
          fallback={<VideoLOader/>}
          width={450}
          height={280}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <div className="hidden lg:inline-flex">
        <ReactPlayer
          controls
          wrapper={"div"}
          fallback={<VideoLOader/>}
          width={700}
          height={350}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <VideoDetails id={id} />
    </div>
  );
}

export default Videoplayer;
