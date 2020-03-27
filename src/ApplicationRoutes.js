import Dashboard from "./Views/DashBoard/Dashboard.js";
import CreateUser from "./Views/User/CreateUser.js";
import users from "./Views/User/Users.js";
import Updateuser from "./Views/User/UpdateUser.js";
import CreateProduct from "./Views/Product/CreateProduct.js";
import UpdateProduct from "./Views/Product/UpdateProduct.js";
import Products from "./Views/Product/Products.js";
import CreateLocation from "./Views/Location/CreateLocation.js";
import UpdateLocation from "./Views/Location/UpdateLocation.js";
import Locations from "./Views/Location/Locations.js";
import CreateManufacturer from "./Views/Manufacturer/CreateManufacturer.js";
import Updatemanufacturer from "./Views/Manufacturer/Updatemanufacturer.js";
import Manufacturers from "./Views/Manufacturer/Manufacturers.js";
import CreateIndent from "./Views/Indent/CreateIndent.js";
import UpdateIndent from "./Views/Indent/UpdateIndent.js";
import Indents from "./Views/Indent/Indents.js";


const ApplicationRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/createuser",
    component: CreateUser,
    layout: "/admin",
  },
  {
    path: "/createproduct",
    component: CreateProduct,
    layout: "/admin",
  },
  {
    path: "/products",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/product/:id",
    component: UpdateProduct,
    layout: "/admin",
  },
  {
    path: "/users",
    component: users,
    layout: "/admin",
  },
  {
    path: "/user/:id",
    component: Updateuser,
    layout: "/admin",
  },
  {
    path: "/locations",
    component: Locations,
    layout: "/admin",
  },
  {
    path: "/createlocation",
    component: CreateLocation,
    layout: "/admin",
  },
  {
    path: "/location/:id",
    component: UpdateLocation,
    layout: "/admin",
  },
  {
    path: "/manufacturers",
    component: Manufacturers,
    layout: "/admin",
  },
  {
    path: "/createmanufacturer",
    component: CreateManufacturer,
    layout: "/admin",
  },
  {
    path: "/manufacturer/:id",
    component: Updatemanufacturer,
    layout: "/admin",
  },
  {
    path: "/indents",
    component: Indents,
    layout: "/admin",
  },
  {
    path: "/createindent",
    component: CreateIndent,
    layout: "/admin",
  },
  {
    path: "/indent/:id",
    component: UpdateIndent,
    layout: "/admin",
  }
];
export default ApplicationRoutes;
