import {connect} from "react-redux";
import RecipeBook from "./RecipeBook";

function mapStateToProps(state){
    const ingreds= state.map((ingred)=>{return ingred});
    return {
        ingreds: ingreds
    };
}

const Main= connect(mapStateToProps)(RecipeBook);
export default Main;