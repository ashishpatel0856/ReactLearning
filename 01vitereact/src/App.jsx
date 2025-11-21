import React from "react";

// import ProductList from "./components/Products/ProductList";
import Basics from "./components/Basics";
import UserList from "./components/users/UserList";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
import UseReducerExample from "./components/user-reducer-example";
import FormComponent from "./components/Form/Form";
import RegisterComponent from "./components/register";
import LoginComponent from "./components/login";

// const dummyProductData = ["product 1", "product 2", "product 3"];

function App() {
  return (
    <div>
   <h1 className="text-lg font-bold flex justify-center mt-16">React JS Concepts 2025</h1> 

    {/* <Basics /> */}


{/*       
      <ProductList
        name="ashish" 
         city="prayag" 
         listofproducts={dummyProductData}  />  */}

      {/* <UserList /> */}
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}


      {/* <UseReducerExample /> */}

      {/* <FormComponent /> */}
      <div className="flex items-center justify-center gap-20 mt-20">
        <RegisterComponent />
      <LoginComponent />
      </div>
    </div>
  );
}

export default App;
