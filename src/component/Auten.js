import BACKGROUND from "../img/BACKGROUND.png";
import Layer5 from "../img/Layer5.png";
import "../style/Auten.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Auten = ({ children, name, buttonText, forget }) => {
  console.log();
  return (
    <>
      <div className="container">
        <div className="container1">
          <b className="DCP">DCP Tool</b>
          <p className="SignIn">{name}</p>
          {children}

          <div className="From-Sign-in">
            {forget && (
              <a className="login-form-forgot" href="">
                Forgot password ?
              </a> 
            )}

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {buttonText}
            </Button>
          </div>

          <p></p>
        </div>
        <div className="container5">
          <img className="Layer5" src={Layer5}></img>
        </div>
      </div>
    </>
  );
};

export default Auten;
