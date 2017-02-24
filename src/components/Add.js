import React from "react";
import {Modal} from "react-bootstrap";
import { connect } from "react-redux";
import recipes from "../localStorage";

class Add extends React.Component{
    render(){

        return(
             <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>
                       Add a recipe
                    </Modal.Title>
                </Modal.Header>
                   <Modal.Body>
                    Recipe:
                    <input ref="title" style={{width:"100%"}}placeholder={"Enter recipe title"}></input>
                    <br />
                    Ingredients:
                    <textarea ref="ingreds"style={{width:"100%"}}placeholder={"Enter ingredients separeted with commas"}></textarea>
                    </Modal.Body>
                <Modal.Footer>
                
                <button className="btn btn-success"onClick={this.handleSubmit.bind(this)}>add</button>
                <button className="btn btn-info" onClick={this.close.bind(this)}>Close</button>
                </Modal.Footer>
                
            </Modal>
            );
    }
    close() {
          this.props.dispatch({
           type:"CLOSE"
        });
    }
    handleSubmit(e){
        const title=this.refs.title.value;
        const ingredients=this.refs.ingreds.value.split(",");
        recipes.push({
           title,
           ingredients
    });
    this.props.dispatch({
       type:"ADD",
       title,
       ingredients
    });
    }
}

export default connect()(Add);