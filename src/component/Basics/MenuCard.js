// import React from 'react'

// const MenuCard = ({ menuData }) => {
//     // console.log(menuData)
//     return (
//         <>

//             {menuData.map((curElem) => {
//                 return (
//                     <>
//                         <section className="main-card--cointainer">
//                             <div className="card-container">
//                                 <div className="card ">
//                                     <div className="card-body">
//                                         <span className="card-number card-circle subtle">1</span>
//                                         <span className="card-author subtle">BreakFast </span>
//                                         <h2 className="card-title"> Maggi</h2>
//                                         <span className="card-description subtle">
//                                             I love maggie really oo Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                                             Ut enim ad minim veniam, quis nostrud exercitation
//                                             ullamco laboris nisi ut aliquip ex ea commodo consequat.

//                                         </span>
//                                         <div className="card-read">Read</div>
//                                     </div>
//                                     {/* <img src={image} alt="images" className="card-media" /> */}

//                                     <span className="card-tag  subtle">Order Now</span>
//                                 </div>
//                             </div>
//                         </>
//                         );
//         })};
//                     </section>
//     </>
//     );
// };

// export default MenuCard;




//................




import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title"> {name}</h2>
                    <span className="card-description subtle">
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                 <img src={image} alt="images" className="card-media" />
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;