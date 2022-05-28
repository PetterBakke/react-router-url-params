import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import PageDetail from "./PageDetail";


export const url = process.env.REACT_APP_BASE_URL + "wp/v2/pages/";
console.log(url);

function Home() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPages(response.data);
      console.log(response.data);
    });
  }, []);

  if (!pages) return null;

  return (
    <div className="wordpress">
      {pages.map(function (page) {
        const { id, title, date, excerpt } = page;
        return (
          <>
          <PageDetail key={id} id={id} title={title} date={date} excerpt={excerpt} />
          <ul>
            <li key={title}>{title}</li>
          </ul>
            <Link to="page/{2}">Link to page</Link>
          </>
          )
        
      })}
    </div>
  );
}

export default Home;