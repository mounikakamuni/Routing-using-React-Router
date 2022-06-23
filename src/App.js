import {BrowserRouter, Route} from 'react-router-dom'
import NotFound from './components/NotFound'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => (
  <BrowserRouter>
    <Header />
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </switch>
  </BrowserRouter>
)

export default App
