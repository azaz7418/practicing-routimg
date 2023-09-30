import react from "react";
import { useLoaderData } from "react-router-dom";
import Layout from "./Layout";

const Sproduct = () => {
  const phones = useLoaderData();
  const phone = phones?.data;
  return (
    <div className="single-phone">
      <div className="phone-detail">
        <div className="image">
          <img src={phone.image} />
          <p>{phone?.name}</p>
        </div>

        <div>
          <h3>Details</h3>
          <div>
            <p>Release Date: {phone.releaseDate}</p>
            <h5>Storage: {phone.mainFeatures.storage}</h5>
            <h5>Display size: {phone.mainFeatures.displaySize}</h5>
            <h5>Chip set: {phone.mainFeatures.chipSet}</h5>
            <h5>Memory: {phone.mainFeatures.memory}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sproduct;
