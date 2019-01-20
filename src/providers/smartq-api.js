import resturants from '../json-data/resturants.json';
import resturantLocation from "../json-data/resturants_location.json"


export default class SmartQAPI{

    getResturants = () =>{
        try{
            return resturants;
        }catch(ex){
            throw ex;
        }
    }

    getResturantLocations = () => {
        try{
            return resturantLocation;
        }catch(ex){
            throw ex;
        }
    }
}