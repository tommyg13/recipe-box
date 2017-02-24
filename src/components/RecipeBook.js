import React from "react";
import Titles from "./Titles";
import { connect } from "react-redux";
import Add from "./Add";

class RecipeBook extends React.Component{
    
   render(){
        const ingredient= this.props.ingreds.map((name,i)=><Titles key={i} i={i} title={name.title} ingreds={name.ingredients} />)
        const ingredients= this.props.ingreds.map((name,i)=><Add key={i} i={i} title={name.title} ingreds={name.ingredients} show={this.props.modal_open.show} />)
        return (
            <div className="container">
            <h1 className="text-center">RecipeBook</h1>
            <div className="panel-group" id="accordion">
           {ingredient}
            </div>
            <button onClick={this.open.bind(this)}className="btn btn-primary">Add a recipe</button>
           {ingredients}
            </div>
            );
    }
    open(){
        this.props.dispatch({
           type:"OPEN_ADD",
           show: true
        });
    }
}

function mapStateToProps(state) {
   
      let modal_open;
    if(state.add && state.add.show){
        modal_open= state.add.show;
    }
    else {
        modal_open= {
            show: false
        };
    }

    return {
        modal_open
    };
    
}

export default connect(mapStateToProps)(RecipeBook);