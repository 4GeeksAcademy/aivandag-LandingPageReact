const Cards = ({ index }) => {
  return (

    <div className="mb-3 col-12 col-md-3" >
      <div className="border rounded">
        <img src={"https://picsum.photos/300/200?random=" + index} className="card-img-top" alt="..." />
        <div className="card-body text-center py-3">
          <h5 className="card-title ">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

  );
};

export default Cards;




{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}