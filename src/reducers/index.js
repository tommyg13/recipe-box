export default function recipe(state=[],action){
   
    switch (action.type) {
        case 'MODAL_DELETE_SHOW':
        let new_state;
         new_state=JSON.parse(JSON.stringify(state));
            new_state.modal= new_state.modal ? new_state.modal : {};
            new_state.modal.delete= {
                modalShow: true,
                id:action.id,
                name:action.name
            };
        return new_state;
        
                
        case "OPEN_ADD":
            new_state=JSON.parse(JSON.stringify(state)); 
            new_state.add= new_state.add ? new_state.add : {};
         new_state.add.show= {
                show: true
            };
            return new_state;
          
          case "EDIT_OPEN":
              new_state=JSON.parse(JSON.stringify(state)); 
                 new_state.edit= new_state.edit ? new_state.edit : {};
                 new_state.edit.show= {
                 show: true,
                 title:action.title,
                 ingredients:action.ingredients,
                 id:action.id
            };
            return new_state;
            
        case "CLOSE":
        new_state=JSON.parse(JSON.stringify(state));
            new_state.edit={
            modalShow:true,
            };
            
            return new_state;
            
        case "SAVE":
         new_state=JSON.parse(JSON.stringify(state));
        new_state[action.id].title=action.title;
        new_state[action.id].ingredients=action.ingredients;
         return [...new_state
         ];
         
        case "DELETE":
        new_state=JSON.parse(JSON.stringify(state));
        return [
            ...new_state.slice(0,action.id),
            ...new_state.slice(action.id+1)
            
            ];
        
        case "ADD":
             new_state=JSON.parse(JSON.stringify(state));
            return [
               ...new_state,{
                   title: action.title,
                   ingredients: action.ingredients
               } 
                ];
            
        default:
        return state;
    }
    
    
}