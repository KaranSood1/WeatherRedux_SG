import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


 class WeatherList extends Component {


    renderWeather(cityData){


        const temps = cityData.list.map( (weather) => weather.main.temp);
        const pressure = cityData.list.map((weather) => weather.main.pressure);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>

                <td>
                    <Chart data={temps} color="orange" unit="K"/>
                </td>

                <td>
                    <Chart data={pressure} color="red" unit="hPa"/>
                </td>

                <td>
                    <Chart data={humidity} color="green" unit="%"/>
                </td>

            </tr>
        )
    }

     render () {
        return (
            <div>
               <table className="table table-hover">
                   <thead>
                   <tr>
                       <th>CITY</th>
                       <th>Temperature (K)</th>
                       <th>Pressure (hPa)</th>
                       <th>Humidity (%)</th>
                   </tr>
                   </thead>
                   <tbody>
                   {this.props.weather.map(this.renderWeather)}
                   </tbody>
               </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {weather : state.weather}
}

export default connect(mapStateToProps)(WeatherList);