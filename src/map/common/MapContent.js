import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {GetMapLocations} from "../services/MapApiService";

function MapContent() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        GetMapLocations().then(res => setPlaces(res?.data));
    });

    return (
        <MapContainer id="map-id" center={[50.061489, 19.936380]} zoom={13.45} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {places.map(place => (
                <Marker key={place?.id} position={[place?.address.location.latitude, place?.address.location.longitude]}>
                    <Popup position={[place.address.location.latitude, place.address.location.longitude]}>
                        <div>
                            <h4>{place.name}</h4>
                            <p>{place.description}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapContent;