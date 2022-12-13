import Skeleton from "@mui/material/Skeleton";

function SkeletonLoader() {
  const Sklbox = () => {
    return (
      <div>
        <Skeleton variant="rounded" className="w-[200px] h-[120px] sm:h-[180px] sm:w-[300px]"  />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "10px",width:'90px' }} />

      </div>
    );
  };
  return (
    <div className="w-full flex flex-wrap items-center justify-around space-y-2">
      <Sklbox />
      <Sklbox />
      <Sklbox />
      <Sklbox />
      <Sklbox />
      <Sklbox />
    </div>
  );
}

export default SkeletonLoader;
