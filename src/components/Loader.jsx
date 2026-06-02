import { useEffect } from "react";
import logoImg from "../assets/logo34.png";
import "../style/Loader.css";

const Loader = ({ active }) => {
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <div className={`page-loader ${active ? "visible" : ""}`}>
      <div className="page-loader__inner">
        <img src={logoImg} alt="PASS logo loading" className="page-loader__logo" />
        <div className="page-loader__bar    ">
          <div className="page-loader__progress" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
