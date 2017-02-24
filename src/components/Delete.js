import React from "react";
import { connect } from "react-redux";
import {Modal} from "react-bootstrap";


class Delete extends React.Component{
    render() {
        return(
            <Modal show={this.props.modalShow}>
                <Modal.Header>
                    <Modal.Title>
                       Are you sure you want to delete <strong>{this.props.name}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <button className="btn btn-primary"onClick={this.deleteRecipe.bind(this)}>Yes</button>
                <button className="btn btn-danger"onClick={this.close.bind(this)}>No</button>
                </Modal.Footer>
            </Modal>
            
            );
    }
    close(){
        this.props.dispatch({
           type:"CLOSE",
           modalShow: false
        });
    }
    deleteRecipe(){
        console.log(this.props.modal_delete.id)
        this.props.dispatch({
           type:"DELETE",
           id:this.props.modal_delete.id
        });
    }
}


export default connect()(Delete);