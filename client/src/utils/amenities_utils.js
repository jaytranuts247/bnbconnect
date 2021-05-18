import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faTv,
  faUtensils,
  faParking,
  faDumbbell,
  faSwimmingPool,
  faHotTub,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const AmenitiesMapObject = {
  wifi: { name: "Wifi", icon: faWifi },
  tv: {
    name: "TV with standard cable",
    icon: faTv,
  },
  kitchen: {
    name: "Kitchen",
    icon: faUtensils,
  },
  parking: {
    name: "Free parking on premises",
    icon: faParking,
  },
  gym: {
    name: "Gym",
    icon: faDumbbell,
  },
  pool: {
    name: "Pool",
    icon: faSwimmingPool,
  },
  hottub: {
    name: "Hot tub",
    icon: faHotTub,
  },
  aircon: {
    name: "aircon",
    icon: faSnowflake,
  },
  heat: {
    name: "Heat",
    icon: faSun,
  },
};

export const amenitiesMap = (item, size = "md", iconColor = "#222222") => {
  return {
    name: AmenitiesMapObject[item].name,
    icon: (
      <FontAwesomeIcon
        icon={AmenitiesMapObject[item].icon}
        size={size}
        color={iconColor}
      />
    ),
  };
};
