import React from "react";
import { connect } from "react-redux";
import Edit from "./Edit";

class EditBtn extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.openEdit} className="btn btn-primary">Edit</button>
            <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
             <Edit i={this.props.modal_edit.id}show={this.props.modal_edit.show}title={this.props.modal_edit.title} ingredients={this.props.modal_edit.ingredients}/>
            </div>
        );
    }
    openEdit=()=>{
        this.props.dispatch({
            type:"EDIT_OPEN",
            show:true,
            title:this.props.title,
            ingredients:this.props.ingreds,
            id:this.props.i
        });
    }
    handleDelete=()=>{
        this.props.dispatch({
           type:"MODAL_DELETE_SHOW",
           modalShow: true,
           id:this.props.i,
           name: this.props.title
        });
    }
}

function mapStateToProps(state) {

        let modal_edit;
    if(state.edit && state.edit.show){
        modal_edit= state.edit.show;
    }
    else {
        modal_edit= {
            show: false,
            title:"",
            ingredients:"",
        };
    }

    return {
        modal_edit:modal_edit
    };
}
export default connect(mapStateToProps)(EditBtn);