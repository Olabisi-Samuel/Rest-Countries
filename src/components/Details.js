import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { common } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${common}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>go back</button>
      {data.map((items) => {
        return (
          <section>
            <img src={items.flags.png} />
            <p>{items.name.official}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Details;

// {data.map((items, key => {
//   return (
//     <section key={key}>
//       <img src={items.flags.png} alt="" style={{ width: "500px" }} />
//       <p>{items.capital}</p>
//     </section>
//   )
// ))}
