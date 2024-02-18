function Products({ post }) {
    const selected = false;
  
    return (
      <>
        <div className="div pt-5 pb-5" style={{ width: "25vw" }}>
          <h4>{post.title}</h4>
          <p>
            {post.description
              .split(" ") // Split the description into an array of words
              .slice(0, 15) // Take the first 10 words
              .join(" ") + "..."} {/* Join the words back into a string and add "..." */}
          </p>
          <img className="img-fluid " style={{width:"150px"}} src={post.image} alt="img"></img>
          <p>{post.price}₹</p>
          <button className="btn  btn-primary ">{selected ? "Remove Item" : "Add To Cart"}</button>
        </div>
      </>
    );
  }
  
  export default Products;
  