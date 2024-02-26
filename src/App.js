
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./component/home";
import MenuLayout from "./layout/MenuLayout";
import Hotchill from "./component/Hotchill";
import Chillers from "./component/Chillers";
import Chillers2 from "./component/Chillers2";
import Delight from   "./component/Delight";
import Smooth from "./component/smooth";
import Info from './component/Info'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}/>
    <Route path='menu' element={<MenuLayout/>}>
      <Route path='hot' element={<Hotchill/>}/>
      <Route path='chill' element={<Chillers/>}/>
      <Route path='chill2' element={<Chillers2/>}/>
      <Route path='del' element={<Delight/>}/>
      <Route path="smooth" element={<Smooth/>}/>
      <Route path="info" element={<Info/>} />
      </Route>
     
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>

    {/* <BrowserRouter>
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
