import Skeleton from "@mui/material/Skeleton";

function ScaletonLoader3() {
    const Loader =()=>{
        return(
            <div className="w-full flex justify-around bg-slate-100 p-1 rounded-md mb-2">
                <Skeleton variant="rounded"  sx={{width:'120px',height:'90px'}}/>
                <div className="w-[53%] flex flex-col items-center justify-around">
                    <Skeleton variant="text" sx={{width:'120px',fontSize:'1.125rem'}}/>
                    <Skeleton variant="text" sx={{width:'60px',fontSize:'1.125rem'}}/>
                    <Skeleton variant="text" sx={{width:'60px',fontSize:'2rem'}}/>
                </div>
            </div>
        )
    }
  return (
    <div>
        <Loader/>
        <Loader/>
        <Loader/>
        <Loader/>
        <Loader/>
    </div>
  )
}

export default ScaletonLoader3