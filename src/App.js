import Navbar from './components/layout/Navbar';
import Students from './components/layout/students/Students';
import './styles/App.scss';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import Student from './components/layout/students/Student';
import StudentForm from './components/layout/students/StudentForm';
import {Provider} from 'react-redux'
import store, {rrfProps} from './Store'
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import Login from './Pages/Login';
import PrivateRoutes from './components/routes/PrivateRoutes';

function App() {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
          <PrivateRoutes component={Navbar}/>
            <Switch>
              <PrivateRoutes exact path="/" component={Students} />
              <PrivateRoutes exact path="/student/:id" component={Student} />
              <PrivateRoutes exact path="/studentForm/:id?" component={StudentForm} />
              <Route exact path='/login' component={Login}/>
            </Switch>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default App;
