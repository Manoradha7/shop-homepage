import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function App() {
  const product = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAerVE5kPu9SSU9ilY1Jpwr5XI4XvgEuoVlA&usqp=CAU",
      title: "Fancy Product",
      rating: null,
      price: "$40.00-$80.00",
      stock: "no",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq42u_BfFF8k9BwhCg9WXTDWkhX5Y-_VzZOw&usqp=CAU",
      title: "Special Item",
      rating: 5,
      price: "$18.00",
      stock: "yes",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqolUE6EASNES-I4tilhV1tYZy5pO4_9cSUg&usqp=CAU",
      title: "Sale Item",
      rating: null,
      price: "$25.00",
      stock: "yes",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2G0uck7OGzdcNd-feHPaNtanNzmNisUY0w&usqp=CAU",
      title: "Popular Item",
      rating: 5,
      price: "$40.00",
      stock: "no",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF16_70q4NuNobp-KaCSvWbWoY9AUBBroog&usqp=CAU",
      title: "Sale Item",
      rating: null,
      price: "$25.00",
      stock: "yes",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjxW0S_pFbK0qOvf2aCs0UpLCuNsmOi0V1g&usqp=CAU",
      title: "Fancy Product",
      rating: null,
      price: "$120.00-$280.00",
      stock: "no",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jR9BcFQ84f9b5jLN4NWaMNEEWr6DWrY0CQ&usqp=CAU",
      title: "Special Item",
      rating: 5,
      price: "$18.00",
      stock: "yes",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx_zfTzIWtSCjsv3sb-pErOkJ--yonsMHCg&usqp=CAU",
      title: "Popular Item",
      rating: 5,
      price: "$40.00",
      stock: "no",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [show,setShow]=useState('show')
  return (
    <div className="App">

      {/* create appbar for showing the basic function os the page*/}
      <AppBar position="static" className="app-bar">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            <h3> Start Bootstrap</h3>
          </Typography>
          <div className="components">
            <Button
              variant="text"
              style={{ color: "white" }}
              className="link-btn"
            >
              Home
            </Button>
            <Button
              variant="text"
              style={{ color: "white" }}
              className="link-btn"
            >
              About
            </Button>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              style={{ color: "white" }}
              className="link-btn"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Shop
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>All Products</MenuItem>
              <hr />
              <MenuItem onClick={handleClose}>Popular Items</MenuItem>
              <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
            </Menu>
          </div>
          <Button
            className="order-btn"
            style={{ marginLeft: "auto", color: "white" }}
            variant="outlined"
          >
            Cart <ShoppingCartIcon />
            <Badge
              badgeContent={"0"}
              sx={{
                "& .MuiBadge-badge": {
                  color: "black",
                  backgroundColor: "white",
                },
              }}
            ></Badge>
          </Button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="menu-btn"
            onClick={()=>setShow(!show)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>

      {/* Use conditional rendering to show the basic components when the button is click */}
      {show ? "":(<div className="components1">
            <Button
              variant="text"
              style={{ color: "black" }}
              className="link-btn"
            >
              Home
            </Button>
            <Button
              variant="text"
              style={{ color: "black" }}
              className="link-btn"
            >
              About
            </Button>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              style={{ color: "black" }}
              className="link-btn"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Shop
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>All Products</MenuItem>
              <hr />
              <MenuItem onClick={handleClose}>Popular Items</MenuItem>
              <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
            </Menu>
          </div>)}
      <header className="header-content">
        <h2 className="title">Shop in style</h2>
        <p className="sub-title">With this shop homepage template</p>
      </header>
      <div className="products">

        {/* use map function for looping the datas */}
        {product.map((m) => (
          <Product
            image={m.image}
            title={m.title}
            rating={m.rating}
            price={m.price}
            stock={m.stock}
          />
        ))}
      </div>
      <footer className="footer-details">
        <h5>Copyright © Your Website 2021</h5>
      </footer>
    </div>
  );
}

// create function components for product 
function Product({ image, title, rating, price, stock }) {
  return (
    <div className="product-box">
      <div className="product-details">
        {stock === "yes" ? (
          <Badge
            badgeContent={"sale"}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "black",
              },
            }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            overlap="rectangular"
          >
            <img src={image} alt={title} className="img" />
          </Badge>
        ) : (
          <img src={image} alt={title} className="img" />
        )}
        <h3>{title}</h3>
        {rating > 4 ? <Rating name="read-only" value={rating} readOnly /> : ""}
        <p>{price}</p>
        <Add />
      </div>
    </div>
  );
}

function Add() {
  // const [order, setOrder] = useState[0];
  return <Button variant="outlined">Add to cart</Button>;
}
