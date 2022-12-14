import { Button, Space } from 'antd';
import { Link } from "react-router-dom";
import pathHome from '../utils/data';
import '../style/App.css';

const Carditem = () =>
    <>
        {pathHome.map((d) => {
            return (
                <div class="card">
                    <span>
                        <div style={{ border: "1px solid white", borderRadius: "50%", width: "200px", height: "200px", background: "white" }}>
                            <Link to={d.path}><Button type="link"><br></br><br></br><h1 style={{ color: "black" }}>{d.text}</h1></Button></Link>
                        </div>
                        <p style={{ color: "black" }}>{d.date}</p>
                    </span>
                </div>
            );
        })}
    </>

export default Carditem;