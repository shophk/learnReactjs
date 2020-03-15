import React from 'react';

const Ninja = ({ ninjas, dismissNinja }) => {
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 25)
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div> name: {ninja.name}</div>
  //         <div>age: {ninja.age}</div>
  //         <div> belt: {ninja.belt}</div>
  //         <br />
  //       </div>
  //     );
  // });
  // return <div className="ninja-list">{ninjaList}</div>;

  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        return ninja.age > 30 ? (
          <div className="ninja" key={ninja.id}>
            <div> name: {ninja.name}</div>
            <div>age: {ninja.age}</div>
            <div> belt: {ninja.belt}</div>
            <button onClick={() => dismissNinja(ninja.id)}>
              Dismiss Ninja
            </button>
            <br />
          </div>
        ) : null;
      })}
    </div>
  );
};

// class Ninja extends Component {
//   render() {
//     console.log(this.props);

//     //destructure
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map(ninja => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div> name: {ninja.name}</div>
//           <div>age: {ninja.age}</div>
//           <div> belt: {ninja.belt}</div>
//           <br />
//         </div>
//       );
//     });
//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }
export default Ninja;
