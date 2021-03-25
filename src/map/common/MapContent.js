import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import {GetMapLocations} from "../services/MapApiService";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import L from 'leaflet';

function MapContent(props) {

    const RADIUS = 3000;
    const [map, setMap] = useState(null);
    const [places, setPlaces] = useState([]);
    const [centerLatitude, setCenterLatitude] = useState(50.059391);
    const [centerLongitude, setCenterLongitude] = useState(19.937222);

    useEffect(() => {
        GetMapLocations(props.categories, centerLatitude, centerLongitude, RADIUS)
            .then(res => setPlaces(res?.data));
    }, [props.categories, centerLatitude, centerLongitude]);

    function handleClick() {
        if (map) {
            map.locate();
        }
    }

    function MapEvents() {
        const map = useMapEvents({
                moveend: () => {
                    let center = map.getCenter()
                    setCenterLatitude(center.lat);
                    setCenterLongitude(center.lng);
                    console.log("Center:", center);
                },
                locationfound: (e) => {
                    let position = e.latlng;
                    const circle = L.circle(position, {radius: 250, weight: 5, fill: false});
                    circle.addTo(map);
                    map.flyTo(position)
                },
                locationerror: (e) => toast(`Error: ${e?.message}`)
            }
        )
        return null;
    }

    return (
        <>
            {/*{JSON.stringify(props.categories)}*/}
            <div className="map-wrapper">
                <button className='button-location' onClick={handleClick}>
                    <i className="fas fa-location-arrow"/>
                </button>
                <MapContainer id="map-id" center={[centerLatitude, centerLongitude]} zoom={13.5} scrollWheelZoom={false}
                              whenCreated={setMap}>
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
                                    <p>
                                        <b>Address:</b> {place.address.street} {place.address.streetNumber}, {place.address.town}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    {/*<UsersLocation/>*/}
                    <MapEvents/>
                </MapContainer>
                <ToastContainer/>
            </div>
        </>
    );
}

export default MapContent;