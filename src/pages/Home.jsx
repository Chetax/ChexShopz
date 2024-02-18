import { useEffect, useState } from "react";
import Spin from "../components/Spin";
import Products from "../components/Products";

function Home() {
  const baseurl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(baseurl);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <div className="container maindiv">
          <div className="row d-flex ">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={post.id}>
                  {/* Adjust the column classes based on your desired responsiveness */}
                  <Products id={post.id} post={post} />
                </div>
              ))
            ) : (
              <div>No data Found</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
