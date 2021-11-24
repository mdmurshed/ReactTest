import logo from './logo.svg';
import './App.css';
import Greet from "./Test/counter"
import Style from './Test/style'
import PersonList from './Test/personList';
import FromComponent from './Test/FromComponent'
import LifeCycle from './Test/LifeCycle';
import Fragments from './Test/Fragments';
import Table from './Test/Table';
import PureCom from './Test/PureCom';
import ParentCom from './Test/parentCom';
import RefDemo from './Test/Ref/refDemo';
import Focus from './Test/Ref/Focus';
import ParentInput from './Test/Ref/parentInput';
import Pre_root from './Pre_root'
import ErrorBoundary from './Test/ErrorBoundary';
import ErroCom from './Test/erroCom';
import ClickCounter from './Test/updateRef/ClickCounter';
import HoverCounter from './Test/updateRef/HoverCounter';
import ClickCounter2 from './Test/updateRef/ClickCounter2';
import HoverCounter2 from './Test/updateRef/HoverCounter2';
import UserRenderProps from './Test/updateRef/UserRenderProps';
// import Counter from './Test/updateRef/Counter';
import ComponentA from './Test/Context/ComponentA';
import { UserProvider } from './Test/Context/UserContext';
import IntervalHooks from './Hooks/Interval/IntervalHooks'
import ComponentTest from './ReducerAndContext/ComponentTest';
import DataFatchingOne from './Hooks/DataFatach/DataFatchingOne';
import DataFachingTwo from './Hooks/DataFatach/DataFachingTwo';
import ParentComponent from './UseCallBack/ParentComponent';
import Counter from './Memo/Counter'
import FocusInput from './UseRef/FocusInput';
import ClassTimer from './UseRef/ClassTimer';
import HookTimer from './UseRef/HookTimer';
import DocTitleOne from './CustomHook/DocTitleOne';
import DocTitleTwo from './CustomHook/DocTitleTwo';
import CounterOne from './CustomHookCounter/CounterOne';
import CounterTwo from './CustomHookCounter/CounterTwo';
import UserFrom from './CustomHook/UserFrom';
import {Button} from 'gs-component'
import {useState} from 'react'
import { CustomChecksBox } from './react-custom-checkbox/src';
function App() {
  
  // const [valid,  setValid] = useState(false);
  // const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');

  // const passwordRequirements = [
  //   {
  //     text: 'Must be at least 8 characters',
  //     validator: val => val.length >= 8,
  //   },
  //   {
  //     text: 'Must contain at least one number',
  //     validator: val => /\d/g.test(val),
  //   },
  //   {
  //     text: 'Must contain at least one lower-case letter',
  //     validator: val => /[a-z]/g.test(val),
  //   },
  //   {
  //     text: 'Must contain at least one upper-case letter',
  //     validator: val => /[A-Z]/g.test(val),
  //   }
  // ];
  return (
    <div className="App">
      <CustomChecksBox type="checkbox" label="male"/>
      {/* <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={isValid => setValid(isValid)}
      />
     <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />

      <button disabled={!valid || !username}>Sign Up</button> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React 
        </a>
        
      </header> */}
      {/* <FromComponent></FromComponent> */}
      {/* <LifeCycle></LifeCycle> */}
      {/* <Fragments></Fragments> */}
      {/* <Table></Table> */}
      {/* <ParentCom/> */}
      {/* <RefDemo></RefDemo> */}
      {/* <Focus/> */}
      {/* <ParentInput/> */}
      {/* <Pre_root></Pre_root> */}
      {/* <ErroCom>
      <ErrorBoundary hero="alamin"/>
      </ErroCom>
      <ErroCom>
      <ErrorBoundary hero="joker"/>
      </ErroCom>
      <ErroCom>
      <ErrorBoundary hero="tanvir"/>
      </ErroCom> */}
      {/* <ClickCounter name="alamin" age="21"/>
      <HoverCounter name="alamin"/>
      <ClickCounter2></ClickCounter2>
      <HoverCounter2/>
      <UserRenderProps render={(isLoggedIn)=>isLoggedIn?"murshed":"Guest"}/> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a> */}
        {/* <EventBinding />
         <Parent/> */}
         {/* <UserGreeting/>
         <Function></Function> */}
      {/* </header> */}
      {/* <HoverCounter/>
      <ClickCounter/> */}
      {/* <UserProvider value="murshed">
        <ComponentA/>
      </UserProvider> */}
      {/* <PostList/> */}
      {/* <PostFrom/> */}
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterUpdate/>
      <HookCount3/>
      <HookCounter4/>
      <ClassEffect/> */}
       {/* <HookEffectCounter/> */}
       {/* <ClassMouse/> */}
       {/* <Hookmouse/> */}
       {/* <MouseContainer/> */}
       {/* <ClassInterval/> */}
       <IntervalHooks/>
       {/* <DataFaching/> */}
      {/* <ComponentA/> */}
      {/* <ComponentTest/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      
      {/* <Counter>
      {(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )}  
      </Counter>  
      <Counter>
      {(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount} />
      )}  
      </Counter>   */}
      
      {/* <Counter render={(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )}/>  
      <Counter render={(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount} />
      )}/>   */}
      {/* <UserProvider value="murshed">
          <ComponentA/>
      </UserProvider> */}
      {/* <ComponentTest/> */}
      {/* <DataFatchingOne/> */}
      {/* <DataFachingTwo/> */}
      {/* <ParentComponent/>
      <Counter></Counter>
      <FocusInput/>
      <ClassTimer/>
      <HookTimer/>
      <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <UserFrom/> */}
    </div>
  )
}

export default App;
