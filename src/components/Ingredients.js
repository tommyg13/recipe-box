import React from "react";
import { connect } from "react-redux";
import Delete from "./Delete";

import EditBtn from "./EditBtn";
class Ingredients extends React.Component {

    render() {
     const ingreds= this.props.ingreds.map((ingred,i)=><li key={i}>{ingred}</li>);
        return(
             <div className="panel-body">
                 <h4 id="title"style={{textAlign:"center"}}>Ingredients</h4>
                 <ul>
                 {ingreds}
                 </ul>
                 <EditBtn {...this.props}/>
                 <Delete {...this.props} name={this.props.modal_delete.name} modalShow={this.props.modal_delete.modalShow}/>
            </div>
            );
    }
    

}

function mapStateToProps(state) {

      let modal_delete;
    if(state.modal && state.modal.delete){
        modal_delete= state.modal.delete;
    }
    else {
        modal_delete= {
            modalShow: false,
            name: ""
        };
    }

    return {
        modal_delete:modal_delete
    };
}


export default connect(mapStateToProps)(Ingredients);