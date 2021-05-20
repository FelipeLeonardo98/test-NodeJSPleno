// imports
import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import './map.css';
import mapStyles from './mapStyles.js';

const options = {
    styles: mapStyles,
}

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

export default function MapGoogle() {
    const mapRef = useRef();
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(8);

    const url =
        "http://images.contelege.com.br/poi.json";
    const { data, error } = useSwr(url, { fetcher });
    const places = data && !error ? data.slice(0, 2000) : [];
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

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 }
    });

    return (
        <div style={{ height: "70vh", width: "90%", margin: "40px auto 0 auto", color: "#FFF" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDeuPrnXLEdE2_wCuO-_KTPF9mCDW1n8qY' }}
                defaultCenter={{ lat: -23.574358764461905, lng: -46.58184848218016 }}
                defaultZoom={8}
                options={options}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map;
                }}
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
                                <div
                                    className="cluster-marker"
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

                    return (
                        <Marker
                            key={`place-${cluster.properties.where}`}
                            lat={latitude}
                            lng={longitude}
                        >
                            <button className="crime-marker">
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