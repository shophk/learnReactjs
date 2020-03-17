import React from 'react';

//This is a functional component
//The props is part of the
const Home = props => {
  //THIS IS programmatic redirect, without higher order function as this page is enclosed in Route tag in PokeApp.

  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 5000);
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque
        vero ipsa facilis inventore deserunt placeat provident, aspernatur iste
        tenetur modi nesciunt excepturi omnis ex, atque mollitia eligendi
        asperiores doloribus?
      </p>
    </div>
  );
};
export default Home;
