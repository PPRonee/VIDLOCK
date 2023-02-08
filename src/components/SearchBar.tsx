import React, { useState, useEffect } from "react";
import { data } from "../pages/data";
import "./Searchbar.css";

interface Videos {
  id: number;
  nom: string;
  lien: string;
  categorie: string;
  auteur: string;
  tags: string[];
  // img: string;
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<Videos[]>(data);

  useEffect(() => {
    //   si searchTerm est égale à chaine vide""
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      // je met setFilteredData à []
      //sinon j'execute le code en dessous
      setFilteredData(
        data.filter((item: Videos) =>
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className=".search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="resulta">
        {filteredData.map((item) => (
          <div className="sch">
            <div className="">
              <p className="nomen">{item?.categorie}</p>

              {/* <p className="categorie">{val?.categorie}</p> */}

              <iframe
                width="560"
                height="315"
                src={item?.lien}
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
