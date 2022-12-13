import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";


function SkeletonLoader2() {
  return (
    <div className="w-full">
      <div className="w-full p-1 flex items-center justify-between">
        <div>
        <Skeleton variant="text" sx={{ fontSize: "1.125rem" ,width:'230px'}} />
        <Skeleton variant="text" sx={{ fontSize: "10px" }} />
        <Skeleton variant="text" sx={{ fontSize: "13px",width:'90px' }} />
        </div>
        <div className="p-1 ">
            <Skeleton variant="circular" sx={{width:'40px',height:'40px'}}/>
        </div>
      </div>
      <Divider/>
      <div className="flex items-center justify-between p-2">
        <Skeleton variant="rounded" sx={{width:'120px'}}/>
        <Skeleton variant="rounded" sx={{width:'30px'}}/>
              </div>
      <Divider/>
    </div>
  );
}

export default SkeletonLoader2;
