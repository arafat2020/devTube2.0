import Skeleton from "@mui/material/Skeleton";

function VideoLOader() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        sx={{ width: "320px", height: "150px" }}
      />
    </div>
  );
}

export default VideoLOader;
