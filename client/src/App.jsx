import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import RegisterPage from './pages/RegisterPage';
import DetailBookPage from './pages/DetailBookPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="books/:bookId" element={<DetailBookPage />} />
          <Route path="editbook/:bookId" element={<EditBookPage />} />
          <Route path="addbook" element={<AddBookPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
