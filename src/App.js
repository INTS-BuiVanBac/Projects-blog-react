import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoutes from './layouts/PrivateRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import Layouts from './layouts/Layouts';

function App() {
    return (
        <Routes>
            <Route element={<Layouts />}>
                <Route element={<Main />}>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
