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
import Counter from './Test/updateRef/Counter';
function App() {
  return (
    <div className="App">
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
      <Counter>
      {(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )}  
      </Counter>  
      <Counter>
      {(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount} />
      )}  
      </Counter>  
      
      {/* <Counter render={(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount} />
      )}/>  
      <Counter render={(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount} />
      )}/>   */}
        

    </div>
  )
}

export default App;
