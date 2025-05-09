import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="home">
      <section className="section1">
        <h1>Paradise Nursery</h1>
        <p>Welcome to your paradise of houseplants!</p>
        <Link to="/products"><button>Get Started</button></Link>
      </section>
      <section className="section2">
        <h3>Welcome to your paradise of houseplants!</h3>
        <p>Paradise Nursery is a charming online store dedicated to bringing nature into your home with beautiful, hand-picked houseplants. <br /> Each plant is carefully selected for its beauty, health, and ability to thrive indoors.
          <br />
          <br />
          Our mission is to make plant care accessible, joyful, and sustainable. <br /> We group our plants into helpful categories so customers can easily find the perfect fit for their home or office.
          <br />
          <br />
          With a simple and intuitive shopping experience, Paradise Nursery offers a seamless way to browse, select, and purchase plants. <br /> Our secure checkout, fast shipping, and responsive support ensure every customer is happy.</p>
      </section>
    </div>
  );
}