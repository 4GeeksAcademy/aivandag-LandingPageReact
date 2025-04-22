import Cards from "./Cards";

const MultiCards = () => {
  return (
<>
    <div className="container mt-5">
      <div className="row ">
        

          <Cards index={1} />
          <Cards index={2} />
          <Cards index={3} />
          <Cards index={4} />
        </div>
      </div>
    
</>
  );
};

export default MultiCards;