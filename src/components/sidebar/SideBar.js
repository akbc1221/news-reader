import React, { useState, useMemo } from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import {
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  useMediaQuery,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import categories from "../../categories/categories";

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  //---------------------------------------------------
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  //----------------------------------------------------

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Typography variant="h6" color="textSecondary">
            Categories
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem
            className={classes.item}
            button
            onClick={() => setCategory(text)}
            key={text}
          >
            <ListItemText secondary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <ThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </ThemeProvider>
    </div>
  );
}
