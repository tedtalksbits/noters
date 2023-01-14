import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../components/Nav";
import ResonsiveWrapper from "../components/Wrapper/ResonsiveWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <ResonsiveWrapper>
        <Component {...pageProps} />
      </ResonsiveWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
