import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { menuData } from "../utils/menuData";
import { useContext } from "react";
import { devContext } from "../provider/DevProvider";

function Menu() {
  const ctx = useContext(devContext)
  console.log(ctx.term)
  return (
    <Paper >
      {menuData.map((e) => {
        return (
          <MenuList key={e.name}>
            <MenuItem className={`${ctx.term===e.name && "bg-slate-300"}`} onClick={()=>ctx.setTerm(e.name)}>
              <ListItemIcon className="text-slate-700">{e.icon}</ListItemIcon>
              <ListItemText><span className="hidden sm:inline-flex">{e.name}</span></ListItemText>
            </MenuItem>
          </MenuList>
        );
      })}
    </Paper>
  );
}

export default Menu;
