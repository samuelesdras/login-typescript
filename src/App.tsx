import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import Login from './components/login';
import Profile from './components/profile';

import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <>
      <ToastContainer delay={3000} position="bottom-right" />
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>
                    Por favor, verifique o endereço digitado na url da página
                  </p>
                </main>
              }
            />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
