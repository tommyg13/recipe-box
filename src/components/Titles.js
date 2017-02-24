import React from "react";
import Ingredients from "./Ingredients";

export default class Titles extends React.Component {
    render() {
        return(
                 <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href={`#`+this.props.i}>{this.props.title}</a>
                    </h4>
                  </div>
                  <div id={this.props.i} className="panel-collapse collapse">
                  <Ingredients i={this.props.i} ingreds={this.props.ingreds} title={this.props.title}/>
                  </div>
                    </div>
            );
    }

}

