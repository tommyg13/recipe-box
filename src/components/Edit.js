import React from "react";
import {Modal} from "react-bootstrap";
import { connect } from "react-redux";

class Edit extends React.Component{

    render(){
        return(
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>
                       Edit {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                   <Modal.Body>
                    Recipe:
                    <input ref="title" style={{width:"100%"}}value={this.props.title}onChange={this.handleInput.bind(this)}></input>
                    <br />
                    Ingredients:
                    <textarea ref="ingreds"style={{width:"100%"}}value={this.props.ingredients}onChange={this.handleText.bind(this)}></textarea>
                    </Modal.Body>
                <Modal.Footer>
                
                <button onClick={this.save}className="btn btn-success">save</button>
                <button onClick={this.closeEdit.bind(this)}className="btn btn-warning">Close</button>
                </Modal.Footer>
                
            </Modal>
             );
    }
    closeEdit(){
       this.props.dispatch({
          type:"CLOSE",
          Modalshow:false,
          
       });
    }

    handleInput(event){
        this.props.dispatch({
           type:"EDIT_OPEN",
           show:false,
           title:this.refs.title.value,
           ingredients:this.props.ingredients,
           id:this.props.i
        });
       
    }
    handleText(event){
        this.props.dispatch({
           type:"EDIT_OPEN",
           show:false,
           title:this.props.title,
           ingredients:this.refs.ingreds.value.split(","),
           id:this.props.i
        });

    }
    save=()=>{
this.props.dispatch({
       type:"SAVE",
       shpw:false,
       title:this.props.title,
       ingredients:this.props.ingredients || [],
       id:this.props.i
    });
    }
    
}

export default connect()(Edit);

