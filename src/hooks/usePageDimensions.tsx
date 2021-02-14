import  {useState, useEffect} from "react";


function usePageDimension(){
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect (() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  });

  const updateDimensions =() =>  {
    let windowWidth:number = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight:number = typeof window !== "undefined" ? window.innerHeight : 0;
    setWindowHeight(windowHeight);
    setWindowWidth(windowWidth);
  }

  return [windowHeight, windowWidth] as const; 
}

export default usePageDimension;