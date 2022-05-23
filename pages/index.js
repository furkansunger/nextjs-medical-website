import MainLayout from "../components/Layout";
import {
  About,
  Contact,
  Gallery,
  Header,
  Services,
  Treatments,
  Testimonals,
} from "../components/HomePage";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Treatments />
      <Testimonals />
      <Gallery />
      <Contact />
    </>
  );
}

Home.Layout = MainLayout;

export default Home;
