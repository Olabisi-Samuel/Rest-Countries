import { useEffect, useState } from "react";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const Country = () => {
  const [nation, setNation] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const [filterText, setFilterText] = useState("Africa");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((nation) => {
        setNation(nation);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const filteredCountry = nation.filter((country) => {
  //   if (filterText === "Africa") {
  //     return country.region === "Africa";
  //   } else if (filterText === "America") {
  //     return country.region === "Americas";
  //   } else if (filterText === "Asia") {
  //     return country.region === "Asia";
  //   } else if (filterText === "Europe") {
  //     return country.region === "Europe";
  //   } else if (filterText === "Oceania") {
  //     return country.region === "Oceania";
  //   } else {
  //     return nation;
  //   }
  // });
  // console.log(filteredCountry);

  // const onFilterValueSelected = (filterValue) => {
  //   setFilterText(filterValue);
  // };

  return (
    <div>
      <div className="country-sub-con">
        <div className="input-cont">
          <input
            type="search"
            placeholder="Search Country"
            onChange={(event) => {
              setSearchField(event.target.value);
            }}
          />
        </div>
        {/* <div>
          <Filter filterValueSelected={onFilterValueSelected} />
        </div> */}
      </div>
      <div className="container">
        {nation
          .filter((items) => {
            if (searchField === "") {
              return items;
            } else if (
              items.name.common
                .toLowerCase()
                .includes(searchField.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items, key) => {
            // const { flags, name, capital, population, continents } = details;
            return (
              <div className="cont" key={key}>
                <Link to={`/details/${items.name.common}`}>
                  <div className="img-cont">
                    <img
                      src={items.flags.png}
                      alt=""
                      width={270}
                      height={200}
                    />
                  </div>
                  <div className="text-cont">
                    <h2>{items.name.common}</h2>
                    <p>Population: {items.population}</p>
                    <p>Region: {items.region}</p>
                    <p>Capital: {items.capital}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Country;
