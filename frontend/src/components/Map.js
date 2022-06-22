import { MapContainer, LayersControl, TileLayer, GeoJSON, Popup } from 'react-leaflet'
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { PARCELS } from '../lib/ApolloClient';

const center = [46.210103,-0.148299]
const Map = () => {
    const [parcel, setParcel] = useState({});

    const { loading, error, data } = useQuery(PARCELS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry, something went wrong :(</p>;

    return (
        <div id="map">
        <MapContainer center={center} zoom={13} style={{ height: '95vh', width: '60vw' }}>
        <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
        <TileLayer
   url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
   maxZoom= {20}
   subdomains={['mt1','mt2','mt3']}
/>
        </LayersControl.BaseLayer>
        
      </LayersControl>          
      { data.parcels.map(parcel => (
            <GeoJSON key={parcel.id} pathOptions={{ color: 'red' }} data={parcel.geometry}>
                <Popup>
                <strong>{parcel.id}</strong><br />
                {parcel.address}<br />
                Surface : {parcel.area} m2<br />
                Prop. : { parcel.owner }
              </Popup>

            </GeoJSON>    
            ))
        }

        </MapContainer>
        </div>
    );
}

export default Map