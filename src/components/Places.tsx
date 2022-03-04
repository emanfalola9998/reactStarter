interface PlacesEntryProps {
  title: number;
  place: string;
  countryName: string;
  mainImage: string;
  descrptImage: string;
  width: number;
  height: number;
  locationURL: string;
  location: string;
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

// a title (text)
// a place name (text)
// a country name (text)
// a main image (URL)
// a link to the rough location on google maps (or alternative) (URL)
// some text explaining why you like the place

// interface NavItemProps {
//     label: string;
//   }

//   function NavItem(props: NavItemProps): JSX.Element {
//     return (
//       <>
//         <a href="#">{props.label}</a>
//         <span> | </span>
//       </>
//     );
//   }

//   export default NavItem;
