import React, {Component, useState } from 'react';
import Map from '../dashboard-pages/MapPage';
import Axios from 'axios';
import mapboxgl from 'mapbox-gl';

function MapView(){

	const [pumpsName, setPumpsName] = useState([]);
	const [mapData, setMapData] = useState([]);

	return(
		<div className="container-fluid">
			<Map setPumpsName={setPumpsName} pumpsName={pumpsName} setMapData={setMapData} mapData={mapData}/>
            </div>
	);
	
}

export default MapView;