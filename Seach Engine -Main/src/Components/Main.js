import react ,{useEffect, useState}from "react";
import Card from "./Card";
import papa from "papaparse";
import productCSV from "./ProductList.csv"
const Main=()=>{
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
           productCSV
            );
          const csvData = await response.text();
          const parsedData = papa.parse(csvData, {
            header: true,
          }).data;
          const adjustedData = parsedData.map((item) => ({
            Title: item.Title,
            price: item.Price,
            rating:item.Rating,
            image:item.Image,
            link:item.Link
          }));
          setData(adjustedData);
        };
        fetchData();
      }, []);
    const searchProduct=(evt)=>{
        if(evt.key==="Enter")
        {
            console.log("hello")
        }
    }

    const handleClick = async (e) => {
      e.preventDefault();
      console.log("Happy")
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        console.log(json);
      } else {
        console.log("Fail");
      }
    };
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Find the right product.<br/> Get the best deal.</h1>
                </div>
                <div className="row2">
                    <h2>What are you looking for today?</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Product Name Here . . ."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchProduct}/>
                       <button onClick={handleClick}>Search</button>
                        </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
            {data.map((item, index) => (
          <Card
            key={index}
            title={item.Title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            link={item.link}
          />
        ))}
            </div>
        </>
    )
}
export default Main;
