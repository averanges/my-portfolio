import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  const center = {
    lat: 37.642085,
    lng: 127.207705,
  };

  const [mapsLoaded, setMapsLoaded] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (isLoaded) {
      setMapsLoaded(true);
    }
  }, [isLoaded]);

  return isLoaded && mapsLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      <Marker
        position={{ lat: center.lat, lng: center.lng }}
      />
    </GoogleMap>
  ) : null;
};

export default Map;