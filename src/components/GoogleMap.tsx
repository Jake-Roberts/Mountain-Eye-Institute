"use client";
import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Image from "next/image";
import logo from "../../public/logo.webp";
// import markerIcon from '../assets/markericon.png'

const centerPosition = { lat: 37.657233, lng: -113.085504 };
// 10.5 is the Salt Lake Valley, 15 is neighborhood or freeway exit
const defaultZoom = 15;

// use https://www.gps-coordinates.net/ to convert addresses to coordinates for input below
const propertyCoordinates = [
  { lat: 37.657233, lng: -113.085504 }, // Mountain Eye Institute Cedar City
];

const GoogleMap = ({ apiKey, mapId }: { apiKey: string; mapId: string }) => {
  if (propertyCoordinates?.length && apiKey) {
    return (
      <div className='googlemap component'>
        <div id='map'>
          <APIProvider apiKey={apiKey}>
            <ControlledMap
              propertyCoordinates={propertyCoordinates}
              mapId={mapId}
            />
          </APIProvider>
        </div>
      </div>
    );
  } else return <p className='googlemap component'>Loading...</p>;
};

const ControlledMap = ({
  propertyCoordinates,
  mapId,
}: {
  propertyCoordinates: { lat: number; lng: number }[];
  mapId: string;
}) => {
  return (
    <Map
      defaultZoom={defaultZoom}
      center={centerPosition}
      mapId={mapId}
      disableDoubleClickZoom
    >
      {propertyCoordinates.map((coordinates, index) => (
        <CustomMarker
          key={index}
          coordinates={coordinates as { lat: number; lng: number }}
          index={index}
        />
      ))}
    </Map>
  );
};

const CustomMarker = ({
  coordinates,
  index,
}: {
  coordinates: { lat: number; lng: number };
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdvancedMarker
        position={coordinates}
        key={index}
        onClick={() => setOpen(true)}
      >
        <Pin />
      </AdvancedMarker>
      {open && (
        <InfoWindow position={coordinates} onCloseClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt='Mountain Eye Institute Banner'
            width={100}
            height={40}
          />
          {/* <p style={{ color: "black" }}>Mountain Eye Institute</p> */}
        </InfoWindow>
      )}
    </>
  );
};

export default GoogleMap;
