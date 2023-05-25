import { Link, useMatch } from "react-router-dom";

const SideNav = () => {
  const pbrfMatch = useMatch("/pbrf");
  const holdingMatch = useMatch("/holding");
  const reservationMatch = useMatch("/reservation");
  const carousel = useMatch("/carousel");
  const error = useMatch("/error");

  return (
    <div className="side-navigation">
      <div className="menu-title">Transactions</div>
      <div className="menu-items">
        <Link to="/pbrf" className={pbrfMatch ? "active menu-link" : "menu-link"}>
          PBRF
        </Link>

        <Link to="/holding" className={holdingMatch ? "active menu-link" : "menu-link"}>
          Holding
        </Link>

        <Link to="/reservation" className={reservationMatch ? "active menu-link" : "menu-link"}>
          Reservation
        </Link>

        <Link to="/carousel" className={carousel ? "active menu-link" : "menu-link"}>
          Carousel
        </Link>

        <Link to="/error" className={error ? "active menu-link" : "menu-link"}>
          Error
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
