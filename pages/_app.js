import Nav from "../components/Nav";
import { DevProvider } from "../provider/DevProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DevProvider>
      <Nav />
      <Component {...pageProps} />
    </DevProvider>
  );
}

export default MyApp;
