import Navigation from './components/Navigation'
import Center from './components/Center'
import UserData from './components/UserData'
import './App.css'

function App() {

  return (
    <div className='flex'>
      <Navigation />
      <Center />
      <UserData />
    </div>
  )
}

export default App
