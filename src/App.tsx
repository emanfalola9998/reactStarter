// import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import Places from "./components/Places";
import duiblin_Picture from "/home/2202-005-ef/Developer/academy/training/academy-react-starter/src/images/dublin.jpeg";
import barcelona_Picture from "/home/2202-005-ef/Developer/academy/training/academy-react-starter/src/images/GettyImages-1085317916_54_990x660.webp";
import malta_picture from "/home/2202-005-ef/Developer/academy/training/academy-react-starter/src/images/blue-lagoon-malta-beaches.jpg";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {/* <h1>{greet("World")}</h1> */}
      <Places
        title={1}
        place={"Dublin"}
        countryName={"Ireland"}
        descrptImage={"Picture of a bridge in Dublin"}
        width={1000}
        height={400}
        locationURL={"https://www.google.com/maps/@53.3239919,-6.5258808,10z"}
        location={"Dublin_Bridge"}
        info={"This was the first city I visited outside of England"}
        mainImage={duiblin_Picture}
      />
      <Places
        title={2}
        place={"Barcelona"}
        countryName={"Spain"}
        descrptImage={"Bird's eye view of Barcelona"}
        width={1000}
        height={400}
        locationURL={
          "https://www.google.com/maps/@41.3926467,2.0701492,12z?hl=en"
        }
        location={"La Sagrada Familia, Barcelona"}
        info={"This was the first city I visited with friends"}
        mainImage={barcelona_Picture}
      />
      <Places
        title={3}
        place={"Malta"}
        countryName={"Malta"}
        descrptImage={"Picture of the beautiful blue Malta Sea"}
        width={1000}
        height={400}
        locationURL={
          "https://www.google.com/maps/@35.9421244,14.098163,10z?hl=en"
        }
        location={"Blue lagoon, Malta"}
        info={"This is the city I visited on my 21st birthday"}
        mainImage={malta_picture}
      />
    </>
  );
}

export default App;
