import { logoUrl } from "../utils/constants";
export const Header = () => {
    
  let styleSheet = {
    iconConatiner: {
      width: 100,
      height: 100,
      borderRadius: 20,
    },
  };

  return (
    <div className="heading-container">
      <div className="icon-container">
        <img
          style={styleSheet?.iconConatiner}
          className="logo"
          src={logoUrl}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
