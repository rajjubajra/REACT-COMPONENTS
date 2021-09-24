import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Music from './components/Music/Music';
import Shopify from './components/Shopify/Shopify';
import CompTitle from './components/CompTitle';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">

      <h1 className="text-3xl text-center">React re-usable Components</h1>

      <BrowserRouter>
      
      <Link to="/">THEMES</Link>

        <Switch>
          <Route exact path="/">
            
          <div className="grid grid-cols-2 gap-4 w-full max-w-screen-xl m-auto p-10">
              <Link 
              className="w-full h-40 border border-gray-300 
              flex justify-center items-center" 
              to="/music">Music</Link>
              <Link
              className="w-full h-40 border border-gray-300 
              flex justify-center items-center"  
              to="/shopify">Shopify</Link>
              <Link 
              className="w-full h-40 border border-gray-300 
              flex justify-center items-center" 
              to="/blog">Blog Post</Link>
              <Link
              className="w-full h-40 border border-gray-300 
              flex justify-center items-center"  
              to="/restaurant">Restaurant</Link>
              <Link 
              className="w-full h-40 border border-gray-300 
              flex justify-center items-center" 
              to="/nav">Navigation</Link> 
          </div>
          

          </Route>

          <Route exact path="/music">
          <CompTitle title="Music" />
          <Music />  
          </Route>
          
          <Route exact path="/shopify" >
          <CompTitle title="Shopify" /> 
          <Shopify />
          </Route>

          <Route exact path="/blog">
          <CompTitle title="Blog Post" /> 
            Blog Post
          </Route>


          <Route exact path="/restaurant">
          <CompTitle title="Restaurant" /> 
            Restaurant
          </Route>

          <Route exact path="/nav">
          <CompTitle title="Navigation" /> 
          <Navigation />
          </Route>

          


        </Switch>
        
        
      
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;