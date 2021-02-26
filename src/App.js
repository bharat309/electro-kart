import logo from './logo.svg'
import './App.css'
import { Container } from 'reactstrap'
import Header from './components/heade'
import Footer from './components/footer'
import HomeScreen from './screens/home-screen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import productScreen from './screens/productScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <h1>Application</h1> */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={productScreen}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}
export default App
