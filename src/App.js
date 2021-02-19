import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import Header from './components/heade'
import Footer from './components/footer'
import HomeScreen from './screens/home-screen'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <h1>Application</h1> */}
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App
