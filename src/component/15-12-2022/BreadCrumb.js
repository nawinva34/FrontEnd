import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const routes = [
  {
    path: "/Day2",
    breadcrumbName: "home",
  },
  {
    path: "/Test1",
    breadcrumbName: "Day1",
  },
];
function itemRender(route, params, routes, paths) {
  console.log(route, routes, paths);
  const newArr = paths.filter((arr, index) => {
    return index !== paths.length - 1;
  });
  console.log("/" + newArr.join("/"));
  const last = routes.indexOf(route) === routes.length - 1;
  console.log(last);
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={"/" + newArr.join("/")}>{route.breadcrumbName}</Link>
    // <Link to={newArr.join("/")}>{route.breadcrumbName}</Link>
  );
}

const BreadCrumb = () => {
  return <Breadcrumb itemRender={itemRender} routes={routes} />;
};

export default BreadCrumb;
