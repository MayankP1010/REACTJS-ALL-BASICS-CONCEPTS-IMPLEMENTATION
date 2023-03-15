import logo from './logo.svg';
import './App.css';
import Functioneventhandle from './Functioneventhandle.js'
import Basicprops from './Basicprops.js'
import Eventhandling from './Eventhandling.js';
import Mop1P from './Mop1P.js';
import Mop2C from './Mop2C.js';
import Conditionrender from './Conditionrender.js';
import Listrender from './Listrender.js';
import Fragment1 from './Fragment1.js';
import Fragment2 from './Fragment2.js';
import Fragment3 from './Fragment3.js';
import Refsdemo from './Refsdemo.js';
import Refsdemoparent from './Refsdemoparent.js';
import Refsdemochild from './Refsdemochild.js';
import Reffunctiondemo from  './Reffunctiondemo.js';
import Counterhoc from './Counterhoc.js';
import ClickCounterhoc from './ClickCounterhoc.js';
import LetterCounterhoc from './LetterCounterhoc.js';
import RenderPropsdemo from './RenderPropsdemo.js';
import RenderPropsletter from './RenderPropsletter.js';
import RenderPropsclick from './RenderPropsclick.js';
import ComponentAcontext from './ComponentAcontext.js';
import ComponentBcontext from './ComponentBcontext.js';
import {UserProvider} from './UserContext.js';
import Reacthttpget from './Reacthttpget.js';
import Reacthttppost from './Reacthttppost.js';
import Form from './Form.js';
import UsestateHook1 from './UsestateHook1';
import UsestateHook2 from './UsestateHook2';
import UsestateHook3 from './UsestateHook3';
import UseeffectHook1 from './UseeffectHook1';
import UseeffectHook2 from './UseeffectHook2.js';
import Day1 from './Day1.js';
import './Mystyle.css';
import SignupForm from './SignupForm.js'
import Routeabout from './Routeabout.js';
import Routehome from './Routehome.js';
import Routemenu from './Routemenu.js';
import { Route } from 'react-router';


function App() {
  return ( 
    <div className="App">
   
 {/* <Functioneventhandle/> */}
    {/*<Basicprops name="Maa" /> */}
    {/* <Eventhandling/> */}
    {/* <Mop1P/> */}
    {/* <Conditionrender/> */}
    {/* <Listrender/> */}
    {/* <Form/> */}
    {/* <Fragment1/> */}
    {/* <Fragment2/> */}
    {/* <Refsdemo/> */}
    {/* <Refsdemoparent/> */}
    {/* <HocClickCounter name="Mayank"/> */}
    {/* <HocLetterCounter/> */}
    {/* <RenderPropsletter/> */}
    {/* <RenderPropsclick/> */}
    {/* <RenderPropsdemo render={(count,incrementCounter)=>(<RenderPropsclick count={count}  incrementCounter={incrementCounter}/>)}/>
    <RenderPropsdemo render={(count,incrementCounter)=>(<RenderPropsletter count={count}  incrementCounter={incrementCounter}/>)}/> */}
      {/* <UserProvider value ="Mayank">
        <ComponentAcontext/>
      </UserProvider> */}
      {/* <Reacthttpget/> */}
      {/* <Reacthttppost/> */}
      {/* <UsestateHook1/> */}
      {/* <UsestateHook2/> */}
      {/* <UsestateHook3/> */}
      {/* <UseeffectHook1/> */}
      {/* <UseeffectHook2/> */}
      {/* <Day1/> */}
      {/* <SignupForm/> */}
{/* <switch>
  {/* <Routemenu/> */}
  {/* <Route exact path="/" component={Routeabout}/>
  <Route exact path="/.contact" component={Routehome}/>
</switch> */} 


<ClickCounterhoc/>
<LetterCounterhoc/>
    </div>
  );
}

export default App;
