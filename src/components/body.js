import { useEffect, useState } from "react";
import { testObject } from "../utils/constants";
import { ResturentCard } from "./resCards";
import Search from "./search";
const Body = () => {
  console.log("ent to body");

  const [listofRestro, setListofRestro] = useState(testObject);
  //console.log({listofRestro});

  const fetchData = async () => {
  try {
    // const apiURL =
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9265132&lng=77.63615519999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    // // Wrap Swiggy API with the corsproxy.io
    // const proxyURL = "https://corsproxy.io/?" + encodeURIComponent(apiURL);

    // const response = await fetch(proxyURL);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const data = await response.json();
    console.log("✅ Swiggy Data Fetched Successfully:", data);
  } catch (error) {
    console.error("❌ Error fetching Swiggy data:", error);
  }
};


  useEffect(() => {
    //fetchData();
  }, []);

  return (
    <>
      <div className="filter">
        <Search
          listofRestro={listofRestro}
          setListofRestro={setListofRestro}
        ></Search>
      </div>
      <div className="body-conatiner">
        {listofRestro.map((each, index) => (
          <ResturentCard key={index} resObj={each} />
        ))}
      </div>
    </>
  );
};

export default Body;
