import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { truncateString } from "../utils/trunket";
import timeago from "time-ago";
import LazyLoad from 'react-lazy-load';



function Vcard({img,date,title,des}) {
  return (
    <div className="p-1">
      <Card className="h-[300px] sm:h-[310px]" sx={{ maxWidth: 320 }}>
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
            <Typography gutterBottom variant="h6" component="div">
              {truncateString(title,20)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {truncateString(des, 70)}
            </Typography>
            <Typography variant="caption">{timeago.ago(date)}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Vcard;
