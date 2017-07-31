import _ from 'lodash';
import React,{Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

class Charts extends Component{


    render() {


        function average(data){
            return _.round(_.sum(data)/data.length);
        }

        return(
            <div>
                <Sparklines height={80} width={100} data={this.props.data}>
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="mean"/>
                </Sparklines>
                <div>
                    {average(this.props.data)} {this.props.unit}

                </div>
            </div>

        );
    }
}

module.exports = Charts;