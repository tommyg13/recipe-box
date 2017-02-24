import recipe from "./data";
 const recipes = (typeof localStorage["recipeBook"] !== "undefined") ? JSON.parse(localStorage["recipeBook"]) : recipe
 localStorage.setItem("recipeBook",JSON.stringify(recipes));
  export default recipes
export const loadState=()=>{
  
  try {
      const serializedState= localStorage.getItem("recipeBook");
      if(serializedState===null){
          return null;
      }
      return JSON.parse(serializedState);
  }  catch(err){
      return undefined;
  }
};

export const saveState=(state)=>{
  try{
    const serializedState= JSON.stringify(state);
    localStorage.setItem("recipeBook",serializedState);
  }catch(err){
    
  }
};
