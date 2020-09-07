import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import "./dropdown.scss"
import { Button } from "@progress/kendo-react-buttons";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { DrawerSelectEvent } from "@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent";

const user = {
  name: "athelete 1",
  img:
    "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg",
};

const items = [
  {
    text: "Home",
    icon: "k-i-home",
    route: "/",
    children: null,
  },
  {
    text: "Dashboard",
    icon: "k-i-dribbble",
    route: "/Dashboard",
    children: null,
  },
  {
    text: "additional1",
    icon: "k-i-heart",
    route: "/Dashboard",
    children: null,
  },
  {
    text: "additional2",
    icon: "k-i-paint",
    route: "/Dashboard",
    children: null,
  },
];

const DrawerRouterContainer = (props: React.PropsWithChildren<any>) => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const onSelect = (e: DrawerSelectEvent) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);
    history.push(e.itemTarget.props.route);
    // this.props.history.push(e.itemTarget.props.route);
  };

  return (
    <div>
      <Drawer
        expanded={expanded}
        items={items.map((item) => ({
          ...item,
          selected: items[selectedId].text === item.text,
        }))}
        onSelect={onSelect}
        animation={{ duration: 50 }}
        position="start"
        onOverlayClick={() => {
          setExpanded((currentExpanded) => {
            return !currentExpanded;
          });
        }}
      >
        <DrawerContent>
          <div className="header">
            <h1>
              <span>
                <Button
                  icon="menu"
                  look="flat"
                  onClick={() => {
                    setExpanded((currentExpanded) => {
                      return !currentExpanded;
                    });
                  }}
                />
                <span className="title">
                  Garmin Dashboard
                  <span className="divider">|</span>
                  <span className="fund">{items[selectedId].text}</span>
                </span>
              </span>
              <div className="dropdown">
                <img className="dropbtn" alt={user.name} src={user.img} />
                <div className="dropdown-content">
                  <a href="https://connect.garmin.com/signin">{user.name}</a>
                </div>
              </div>
            </h1>
          </div>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default withRouter(DrawerRouterContainer);
