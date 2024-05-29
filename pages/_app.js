import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../context/AuthContext';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider >
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
