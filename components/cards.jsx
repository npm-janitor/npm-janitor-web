import React from 'react';
import Card from 'react-material-card';

export default class Cards extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div>
        {this.props.modules.map((d) =>{
             d.info.warnings = d.info.warnings || []
             d.info.errors = d.info.errors || []
             d.info.recommendations = d.info.recommendations || []
             return <Card className="cardStyle" overLevel={3} outLevel={1}>
               <h1 style={{marginTop:'5px', width:'90%'}}>
                 <a className={d.info.valid ? "green" : "red"}  href={d.homepage}>{d.module}</a>
               </h1>
               { d.info.warnings.map( (v) => <p className="yellow"> {v} </p>)}
               { d.info.errors.map( (v) => <p className="red"> {v} </p>)}
               { d.info.recommendations.map( (v) => <p className="green"> {v} </p>)}
               </Card>
        })}
        </div>
    }
}
