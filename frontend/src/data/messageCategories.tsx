import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faAt,
  faBook,
  faBuilding,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

const messageCategories = [
  {
    icon: <FontAwesomeIcon icon={faComments} />,
    name: "Threads",
  },
  {
    icon: <FontAwesomeIcon icon={faAt} />,
    name: "Mentions & Reactions",
  },
  {
    icon: <FontAwesomeIcon icon={faBook} />,
    name: "Canvases",
  },
  {
    icon: <FontAwesomeIcon icon={faBuilding} />,
    name: "Slack Connect",
  },
  {
    icon: <FontAwesomeIcon icon={faFile} />,
    name: "Files",
  },
];
export { messageCategories };
