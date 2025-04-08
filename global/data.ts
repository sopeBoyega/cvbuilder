
import { sideBar, StatusType } from "./types";

export const sidebarData: sideBar[] = [
  {
    title: "Home",
    url: "/home",
    descripition: "Home of CV Builder",
    icon: "home",
  },
  {
    title: "My CVs",
    url: "/my-cv",
    descripition:"View all your CVs",
    icon: "notes",
  },
  {
    title: "Word Cloud",
    url: "/word-cloud",
    descripition:"",
    icon: "cloud",
  },
  {
    title: "Settings",
    url: "/settings",
    descripition:"",
    icon: "settings",
  },
];

export const subSideBarData: sideBar[] = [

];

export const cvStatus : StatusType[] = ["drafts","downloaded","saved","drafts","downloaded","saved","drafts","downloaded","saved"]

 








