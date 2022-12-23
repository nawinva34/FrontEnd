import pathHome from "../../utils/data";
import "../../style/App.css";
import { useNavigate } from "react-router-dom";

const CardItem = (props) => {
  console.log(props)
  let navigate = useNavigate();

  const HandleClick = (path, e) => {
    navigate(path);
    console.log(e);
  };

  return (
    <>
      {props.data.map((d) => {
        return (
          <div className="card" onClick={(e) => HandleClick(d.path, e)}>
            <div className="card-inner">
              <h1 style={{ color: "black" }}>{d.text}</h1>
            </div>
            <p className="Date">{d.date}</p>
          </div>
        );
      })}
    </>
  );
};

export default CardItem;
