import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Shopping App</h1>
    </div>
  );
};
export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
    </div>
  );
};
export const Events = () => {

  
  const [date, setDate] = useState("");
  const { month, year } = useParams(date);

  const navigate = useNavigate(); 

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    
    const newMonth = newDate.slice(5, 7);
    const newYear = newDate.slice(0, 4);
    
    navigate(`/events/${newYear}/${newMonth}`);
  };

  useEffect(() => {
    if (month && year) {
      setDate(`${year}-${month.padStart(2, "0")}-01`); // Set the date for the selected month and year
    }
  }, [month, year]);
  
  return (
    <div>
      <h1>Events</h1>

      <input
        type="month"
        name="date"
        value={date}
        min={`${year}-01-01`}
        max="2030-12-31"
        onChange={handleDateChange}      />
    </div>
  );
};
export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
        <Link to="1">Product 1</Link>
        <Link to="2">Product 2</Link>
        <Link to="3">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export const Services = ({ goBack }) => {
  // it will send back the user to the Home URL
  goBack();
  return (
    <div>
      <section>
        <h1>About Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae
          quidem perferendis explicabo minima. Inventore, enim magni! Maiores,
          illo. Voluptatibus iure similique molestiae nisi! Recusandae obcaecati
          expedita in totam. Unde?
        </p>
      </section>
    </div>
  );
};

export const History = () => {
  return (
    <div>
      <section>
        <h1>About History</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          perspiciatis reiciendis voluptatibus libero numquam eligendi incidunt,
          autem animi quos praesentium dolorum rem, obcaecati distinctio labore
          nemo ratione saepe, illum laboriosam!
        </p>
      </section>
    </div>
  );
};

export const Locations = () => {
  return (
    <div>
      <section>
        <h1>About Locations</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          possimus ad vitae soluta, beatae veniam. Ratione fugiat nam ea, magni
          totam odit officia veritatis, voluptatem dolores magnam est quisquam
          quos.
        </p>
      </section>
    </div>
  );
};

export const ProductDetails = () => {
  const products = [
    { id: 1, name: "Laptop", desc: "About Laptops..." },
    { id: 2, name: "Notepad", desc: "About Notepads..." },
    { id: 3, name: "Smart Phone", desc: "About Smart Phones..." },
  ];
  let { id } = useParams();
  id = parseInt(id);
  console.log(useParams());
  const product = products.find((prod) => prod.id == id);
  console.log(product);
  return (
    <>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Description: {product.desc}</p>
    </>
  );
};
export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
