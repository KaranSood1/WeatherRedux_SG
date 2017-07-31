import {FETCH_WEATHER} from '../actions/index';
export default function (state=[],action) {
        //Redux-Promise converts the promise into an object //console.log('Action: ' , action);
        switch (action.type){
            case FETCH_WEATHER:
               return [action.payload.data, ...state];
                //[city, city, city] NOT Like [city, [city,city] ]
        }

    return state;

}