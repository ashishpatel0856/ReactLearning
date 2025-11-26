import React, { Children } from "react";

// import ProductList from "./components/Products/ProductList";
import Basics from "./components/Basics";
import UserList from "./components/users/UserList"; 
import ContextButtonComponent from "./components/context-concept/button";   
import ContextTextComponent from "./components/context-concept/text";  
import UseReducerExample from "./components/user-reducer-example";  
import FormComponent from "./components/Form/Form";   
import RegisterComponent from "./components/register"; 
import LoginComponent from "./components/login";  
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import RecipeList from "./components/pages/Recipes";   
import CommentList from "./components/pages/Comments";   
import RecipeDetailsPage from "./components/pages/RecipeDetailsPage";  
import NotFound from "./components/pages/NotFound";  
import Layout from "./Navbar/Layout"; 
import ReactHookFormExamplePage from "./components/pages/ReactHookFormExamplePage";

// const dummyProductData = ["product 1", "product 2", "product 3"];

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "recipe-list", element: <RecipeList /> },
        { path: "comment-list", element: <CommentList /> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage /> }
      ]
    },
    { 
      path: "*", element: <NotFound />
     },

     {
      path : '/react-hook-form',
      element : <ReactHookFormExamplePage />,
     },
  ]);
  

  return element;
}

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-lg font-bold flex justify-center mt-16">React JS Concepts 2025</h1>

      <br />
      <h1>React routing,custom hooks and more</h1>

      <div>
        <Link to={'/home/recipe-list'}>
        Alternative way of navigating to recipe list page
        </Link>
      </div>

      <button onClick={() => 
        navigate('/home/recipe-list')} className="  bg-black text-amber-50">Navigate to Recipe List page</button>

      <button onClick={() => 
        navigate('/home/comment-list')} className="gap-4 ml-8 bg-red-500 text-amber-50">Navigate to Comment List page</button>

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
      {/* <div className="flex items-center justify-center gap-20 mt-20">
      <RegisterComponent />
      <LoginComponent />
      </div> */}


      {/* <Routes>

        <Route path="/home" element={<Layout/>}>
         <Route path="recipe-list"  element={<RecipeList />} />
        <Route path="comment-list"  element={<CommentList />} />
        <Route path="recipe-list/:id"  element={<RecipeDetailsPage/>}/>
        </Route>

      //   <Route path="*" element={<NotFound />}/>
      // </Routes> */}  
      
      <CustomRoutes /> 
    </div> 
  );
}
export default App;
