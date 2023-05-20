import 'bootstrap/dist/css/bootstrap.css';

import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Account from './Account';
import './App.css';
import AuthComponent from './AuthComponent';
import FreeComponent from './FreeComponent';
import ProtectedRoutes from './ProtectedRoutes';
// import Register from './Register';

function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1> React Authentication</h1>
          <section id='navigation'>
            <a href='/'>Home</a>
            <a className='mx-5' href='free'>Free Component</a>
            <a href='/auth'>Auth Component</a>
          </section>
        </Col>
      </Row>
      {/* create route here */}
      <Routes>
        <Route exact path='/' element={<Account />} />
        <Route exact path='/free' element={<FreeComponent />} />
        {/* <Route exact path='/auth' element={<AuthComponent/>}/> */}
        {/* <ProtectedRoutes path='/auth' component={AuthComponent} /> */}
        <Route exact path='/auth' element={
          <ProtectedRoutes>
            <AuthComponent />
          </ProtectedRoutes>
        } />

      </Routes>

    </Container>
  );
}
export default App;



























