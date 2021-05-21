// imports
import React, { useState, useRef } from "react";
// For GoogleMaps
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
// Settings
import './map.css';
import mapStyles from './mapStyles.js';


// Get mapStyles
const options = {
    styles: mapStyles,
}

// prepering fetcher
const fetcher = (...args) => fetch(...args).then(response => response.json());
// prepering Markers
const Marker = ({ children }) => children;

// Main Function (Component)
export default function MapGoogle() {
    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(8);

    // get ConteleJSON
    const url =
        "http://images.contelege.com.br/poi.json";
    const { data, error } = useSwr(url, { fetcher });
    const places = data && !error ? data : [];
    const points = places.map(place => ({
        type: "Feature",
        properties: { cluster: false, where: place.name },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(place.longitude),
                parseFloat(place.latitude)
            ]
        }
    }));

    // set Clusters
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 }
    });

    // View Map
    return (
        <div className="map" style={{ height: "70vh", width: "90%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDeuPrnXLEdE2_wCuO-_KTPF9mCDW1n8qY' }}
                defaultCenter={{ lat: -23.574358764461905, lng: -46.58184848218016 }}
                defaultZoom={8}
                options={options}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map;
                }}
                // adjusting zoom
                onChange={({ zoom, bounds }) => {
                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ]);
                }}
            >
                {/* clusters settings */}
                {clusters.map(cluster => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const {
                        cluster: isCluster,
                        point_count: pointCount
                    } = cluster.properties;

                    if (isCluster) {
                        return (
                            <Marker
                                key={`cluster-${cluster.id}`}
                                lat={latitude}
                                lng={longitude}

                            >
                                {/* cluster ball, differents sizes */}
                                <div
                                    className="clusterCircle"
                                    style={{
                                        width: `${10 + (pointCount / points.length) * 20}px`,
                                        height: `${10 + (pointCount / points.length) * 20}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id),
                                            20
                                        );
                                        mapRef.current.setZoom(expansionZoom);
                                        mapRef.current.panTo({ lat: latitude, lng: longitude });
                                    }}
                                >
                                    {pointCount}
                                </div>
                            </Marker>
                        );
                    }

                    // markers settings, image, label and lat/lng
                    return (
                        <Marker
                            key={`place-${cluster.properties.where}`}
                            lat={latitude}
                            lng={longitude}
                        >
                            <button className="marker">
                                <img src="./mapIcon.svg" alt={cluster.properties.where} />
                            </button>
                            {cluster.properties.where}
                        </Marker>
                    );
                })}
            </GoogleMapReact>
        </div>
    );
}