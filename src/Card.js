import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "./Dailog";
import globalData from "./data";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CardHeader from "@mui/material/CardHeader";
import Switch from "@mui/material/Switch";
import PublicIcon from "@material-ui/icons/Public";
import { Typography } from "@material-ui/core";

export default function BasicCard() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [members, setMembers] = React.useState([
    { title: "Everyone at Oslash", access: "No Access" }
  ]);
  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader
        avatar={<PublicIcon />}
        title="Share to web"
        subheader="Public and share link with anyone"
        action={
          <Switch checked={false} inputProps={{ "aria-label": "controlled" }} />
        }
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="outlined-name"
            label="People, Emails, Groups "
            onClick={() => setDialogOpen(true)}
            fullWidth
          />
          <Button
            variant="outlined"
            sx={{ textTransform: "none", backgroundColor: "grey" }}
          >
            <Typography>Invite</Typography>
          </Button>
        </Box>
        <Dialog dialogOpenFunction={dialogOpen} setDialogOpen={setDialogOpen} />
        <List>
          {globalData.map((item, index) => (
            <ListItem button key={item}>
              {/* <ListItemIcon>{item.avatarIcon}</ListItemIcon> */}
              <ListItemText primary={item.title} />
              <ListItemText primary={item.access} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ backgroundColor: "grey" }}>
        <Button sx={{ textTransform: "none" }}>learn about sharing</Button>
      </CardActions>
    </Card>
  );
}
