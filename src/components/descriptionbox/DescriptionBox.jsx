import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          dolor eos voluptatem saepe maxime est sint ullam quibusdam accusamus,
          vero obcaecati voluptates, aliquid excepturi neque fugiat animi
          officiis, cupiditate qui?. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nisi laudantium eveniet fuga doloremque, veniam
          doloribus non illum nostrum beatae assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta
          ab, rem eius voluptas dolorem nesciunt aliquam suscipit maiores
          delectus? Ullam nam nobis praesentium doloremque facilis natus quae
          consequatur a.
        </p>
      </div>
    </div>
  );
};
