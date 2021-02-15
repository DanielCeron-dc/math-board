import React, { useEffect, useState } from "react";
import "./Animations.css";

interface IProps {
  NotdestroyChildren?: boolean; 
  show: boolean;
  Animation: string;
  FinalAnimation?: string;
  onAnimationEnd?: () => void; 
}

const Animation: React.FC<IProps> = (props) => {
  const { show,Animation, FinalAnimation } = props;
  const [shouldRender, setRender] = useState<boolean>(false);

  useEffect(() => {
    show && setRender(true);
  });

  const onAnimationEnd = () => {
    //cuando no debe mostrar y acabó la animación 
    !show && setRender(false);
    props.onAnimationEnd && props.onAnimationEnd();
  };

  return shouldRender ? (
    <div
      onAnimationEnd={onAnimationEnd}
      style={{
        zIndex: 500,
        animation: `${show ? Animation : FinalAnimation}`,
      }}
    >
      {props.children}
    </div>
  ) : (
    !props.NotdestroyChildren ? <React.Fragment></React.Fragment>:  <React.Fragment>{props.children}</React.Fragment>
  );
};

export const Animaciones = {
  fadeIn: "fadeIn",
  fadeOut: "fadeOut",
  fadeInX: "fadeInX",
  fadeOutX: "fadeOutX",
  prueba: "prueba",
}


export default Animation;
