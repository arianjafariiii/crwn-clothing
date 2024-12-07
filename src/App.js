import './categories.styles.scss'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return<h1>I am shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} > 
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/auth' element={<Authentication/>} />
      </Route>
      
    </Routes>
  )
}

export default App;
