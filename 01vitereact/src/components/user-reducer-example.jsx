import { useReducer } from "react";


 const initialState = {
    showTextFlag : false,
    changeTextStylesFlag : false
 };

 const HIDE_TEXT ='HIDE_TEXT';
 const SHOW_TEXT ='SHOW_TEXT';
 const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

 function reducer(state,action){
    switch (action.type) {
        case 'HIDE_TEXT':
          return {
            ...state,
            showTextFlag : false
          }

           case 'SHOW_TEXT':
           return {
            ...state,
            showTextFlag : true
          }

           case 'CHANGE_TEXT_STYLE':
           return {
            ...state,
            changeTextStylesFlag : !state.changeTextStylesFlag
          }
    
        default:
            return state;
    }
 }
export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);
   
    console.log(state)

    return (
        <div>
            {
                state?.showTextFlag ? <h1 className="flex items-center "
                
                >Use Reducer Hooks</h1> : null
            }
            <div className="flex items-center gap-3 flex-col ">

            <button className="px-4 py-2 inline-flex bg-blue-500 text-white rounded-sm  w-auto"
            onClick={() => dispatch({type : HIDE_TEXT})}
            >Hide Text</button>


            <button className="px-4 py-2 inline-flex bg-green-500 text-white rounded-sm  w-auto"
            onClick={()=> dispatch({type: SHOW_TEXT})}
            >Show Test</button>


            <button className="px-4 py-2 inline-flex bg-purple-500 text-white rounded-sm w-auto"
            onClick={()=> dispatch({type: CHANGE_TEXT_STYLE})}
            >Toggle Text Styles</button>
            </div>
        </div>
    )
}
