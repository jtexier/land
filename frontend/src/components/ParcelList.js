// import Grid from '@mui/material/Grid';
// import Player from './Player.js';
import { useQuery } from "@apollo/client";
import { PARCELS } from '../lib/ApolloClient';

const ParcelList = () => {
    const { loading, error, data } = useQuery(PARCELS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Sorry, something went wrong :(</p>;
    return (<>
     { data.parcels.map(parcel => <p>{parcel.id}</p>) }
    </>);
}

export default ParcelList;