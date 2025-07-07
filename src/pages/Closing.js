import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Closing.css";

function WW() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialMovie = queryParams.get("movie") || "";

  const [selectedMovie, setSelectedMovie] = useState(initialMovie);

  const movieCollections = {
    SVSC: [
      { region: "AP Share", collections: "6.78Cr (9.8Cr Gross)" },
      { region: "USA", collections: "$564K (3.1Cr Gross)" },
      { region: "Total WW Collections", collections: "12.9Cr Gross" },
    ],
    // You can add more movies here in same format
  };

  const handleSelection = (event) => {
    const selected = event.target.value;
    setSelectedMovie(selected);
    navigate(`?movie=${encodeURIComponent(selected)}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const movie = query.get("movie") || "";
    setSelectedMovie(movie);
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="movie-select" className="dropdown-label">
            Select a movie:
          </label>
          <select
            id="movie-select"
            className="dropdown-select"
            value={selectedMovie}
            onChange={handleSelection}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {Object.keys(movieCollections).map((movie) => (
              <option key={movie} value={movie}>
                {movie}
              </option>
            ))}
          </select>
        </div>

        {selectedMovie && movieCollections[selectedMovie] && (
          <div className="records-table">
            <h2>{selectedMovie}</h2>
            <p>World Wide</p>
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Collections</th>
                </tr>
              </thead>
              <tbody>
                {movieCollections[selectedMovie].map((record, index) => (
                  <tr key={index}>
                    <td
                      style={
                        record.region.includes("Total")
                          ? { fontWeight: "bold", fontSize: "1.2em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region.includes("Total")
                          ? { fontWeight: "bold", fontSize: "1.2em" }
                          : {}
                      }
                    >
                      {record.collections}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default WW;
