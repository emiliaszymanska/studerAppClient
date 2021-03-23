import React, {useState, useEffect, useRef} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {GetMapLocations} from "../services/MapApiService";
import L from 'leaflet';

function MapContent() {

    const RADIUS = 2500;
    const [places, setPlaces] = useState([]);
    const [position, setPosition] = useState(null);
    const [centerLatitude, setCenterLatitude] = useState(50.059391);
    const [centerLongitude, setCenterLongitude] = useState(19.937222);

    useEffect(() => {
        GetMapLocations("PARKS_GREEN_SPACES", centerLatitude, centerLongitude, RADIUS)
            .then(res => setPlaces(res?.data));
    }, [places, centerLatitude, centerLongitude]);

    function LocationMarker() {
        const map = useMapEvents({
            click: () => {
                map.locate().on("locationfound", function (e) {
                    const point = e.latlng;
                    const circle = L.circle(point, {radius: 250});
                    circle.addTo(map)
                    setPosition(point);
                    map.flyTo(point)
                })
            },
            locationfound: (location) => {
                console.log('Location found:', location)
            },
        })
        return null;
    }

    return (
        <>
            <MapContainer id="map-id" center={[centerLatitude, centerLongitude]} zoom={13.5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
                <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c)
                <a href="https://www.mapbox.com/">Mapbox</a>'
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZS1lbWkiLCJhIjoiY2ttZmcyaWxmMHZ6aDJvcDU5bW9veG9iZCJ9.62odp8T-mHNcRI7uxsBbvw"
                />

                {places.map(place => (
                    <Marker key={place?.id}
                            position={[place?.address.location.point.split(" ")[1], place?.address.location.point.split(" ")[0]]}>
                        <Popup
                            position={[place?.address.location.point.split(" ")[0], place?.address.location.point.split(" ")[1]]}>
                            <div>
                                <h4>{place.name}</h4>
                                <p>{place.description}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <LocationMarker/>
            </MapContainer>
        </>
    );
}

export default MapContent;