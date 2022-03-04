interface PlacesEntryProps {
  title: number;
  place: string;
  countryName: string;
  locationURL: string;
  location: string;
  mainImage: string;
  descrptImage: string;
  width: number;
  height: number;
  info: string;
}

function Places(Props: PlacesEntryProps): JSX.Element {
  return (
    <>
      <h2> {Props.title}</h2>
      <p>
        <b>I visited {Props.place}</b>
      </p>
      <p>Located in {Props.countryName}</p>
      <p>Notable places to visit in {Props.place}</p>
      <a href={Props.locationURL}>{Props.location}</a>
      <br></br>
      <img
        src={Props.mainImage}
        alt={Props.descrptImage}
        width={Props.width}
        height={Props.height}
      />
      <p>{Props.info}</p>
    </>
  );
}
export default Places;
