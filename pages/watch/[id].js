import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sajetion from "../../components/Sajetion";
import Videoplayer from "../../components/videoplayer";

function Watch() {
  const router = useRouter();
  const { id } = router.query;
  const [ld, setLd] = useState(false);
  useEffect(() => {
    setLd(true);
  }, []);
  return (
    <div className="w-full sm:w-screen h-screen flex flex-col  justify-around sm:flex-row mx-auto sm:mx-0">
      {ld && <Videoplayer id={id} />}
      
      <Sajetion _id={id} />
    </div>
  );
}

export default Watch;
