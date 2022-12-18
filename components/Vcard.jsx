import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { truncateString } from "../utils/trunket";
import timeago from "time-ago";
import LazyLoad from "react-lazy-load";

function Vcard({ img, date, title, des, cahnnel = "somehing" }) {
  return (
    <div className="p-1">
      <Card className="h-[300px] sm:h-[320px] w-[250px] sm:w-[300px] capitalize" >
        <CardActionArea>
          <LazyLoad>
            <CardMedia
              className="h-[120px] sm:h-[180px]"
              component="img"
              image={img}
              alt="green iguana"
            />
          </LazyLoad>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              <span className="capitalize">{truncateString(title, 20)}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncateString(des, 35)}
            </Typography>
            <Typography variant="caption">{timeago.ago(date)}</Typography>
          </CardContent>
          <button className="bg-slate-200 text-slate-700 font-bold rounded-md ml-2  px-2 py-1 text-[12px]">
            {cahnnel}
          </button>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Vcard;
