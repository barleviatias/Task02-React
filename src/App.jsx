
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Tirgol from './cmp/Tirgol'
import Ex1 from './cmp/Ex1'
import Ex2 from './cmp/Ex2'
import Ex3 from './cmp/Ex3'
// import Tirgol1 from './cmp/week5/Tirgol1'

function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     {/* <Tirgol1></Tirgol1> */}
     <Ex1></Ex1>
     <Ex2></Ex2>
     <Ex3></Ex3>
    </>
  )
}

export default App
