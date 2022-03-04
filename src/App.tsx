// import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import Places from "./components/Places";
import PageFooter from "./components/PageFooter";
import dublin_Picture from "./images/dublin.jpeg";
import barcelona_Picture from "./images/GettyImages-1085317916_54_990x660.webp";
import malta_picture from "./images/blue-lagoon-malta-beaches.jpg";
import kavos_picture from "./images/TELEMMGLPICT000279494724_trans_NvBQzQNjv4Bq44rdSC6sTNv0-awk2LQJvkR8YSybYNWDTYrGStsI8ko.webp";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {/* <h1>{greet("World")}</h1> */}
      <Places
        title={1}
        place={"Dublin"}
        countryName={"Ireland"}
        locationURL={"https://www.google.com/maps/@53.3239919,-6.5258808,10z"}
        location={"Dublin_Bridge"}
        mainImage={dublin_Picture}
        descrptImage={"Picture of a bridge in Dublin"}
        width={1000}
        height={400}
        info={"This was the first city I visited outside of England"}
      />
      <Places
        title={2}
        place={"Barcelona"}
        countryName={"Spain"}
        locationURL={
          "https://www.google.com/maps/@41.3926467,2.0701492,12z?hl=en"
        }
        location={"La Sagrada Familia, Barcelona"}
        mainImage={barcelona_Picture}
        descrptImage={"Bird's eye view of Barcelona"}
        width={1000}
        height={400}
        info={"This was the first city I visited with friends"}
      />
      <Places
        title={3}
        place={"Malta"}
        countryName={"Malta"}
        locationURL={
          "https://www.google.com/maps/@35.9421244,14.098163,10z?hl=en"
        }
        location={"Blue lagoon, Malta"}
        mainImage={malta_picture}
        descrptImage={"Picture of the beautiful blue Malta Sea"}
        width={1000}
        height={400}
        info={"This is the city I visited on my 21st birthday"}
      />
      <Places
        title={4}
        place={"kavos,Corfu"}
        countryName={"Greece"}
        locationURL={"https://www.google.com/maps/@39.391781,20.0898939,14z"}
        location={"Island on coastal region of Corfu"}
        mainImage={kavos_picture}
        descrptImage={"Four guys walking down the main-strip of Kavos"}
        width={1000}
        height={400}
        info={"First ever party Island"}
      />
      <PageFooter />
    </>
  );
}

export default App;
