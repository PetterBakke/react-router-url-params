import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";


function PageDetail() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const { id } = useParams();

  let navigate = useNavigate();
  navigate(`/page/${page.id}`);

  const url = process.env.REACT_APP_BASE_URL + "wp/v2/pages/:" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setPage(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="page-detail">
      <h1>{page.title}</h1>
      <h3>{page.date}</h3>
      <div dangerouslySetInnerHTML={page.excerpt} />


    </div>
  );

}

export default PageDetail;