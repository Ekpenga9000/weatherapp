import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import Popup from react-leaflet
import { useAppSelector } from '../hooks';
import "leaflet/dist/leaflet.css";

const DashboardMap = () => {
  const { data, city } = useAppSelector(state => state.weather);

  // Ensure that latitude and longitude are both numbers before creating the position array
  const position: [number, number] | undefined = 
    data?.city.coord.lat !== undefined && data?.city.coord.lon !== undefined ? [data?.city.coord.lat, data?.city.coord.lon] : undefined;
    
  return (
    <MapContainer center={position || [51.049999, -114.066666]} zoom={10} style={{ height: '20rem', width: '100%', borderRadius:"1.5rem" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {position && (
        <Marker position={position}>
          <Popup>{`City: ${city}`}</Popup> 
        </Marker>
      )}
    </MapContainer>
  );
};

export default DashboardMap;

