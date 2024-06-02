import { Update_totalCost, DELETE_PRODUCT } from "./actions.js";

const Products = [
  {
    id: 1,
    title: "iPhone 15",
    description: "An apple mobile which is nothing like apple",
    starrating: "⭐⭐⭐⭐⭐",
    price: 500,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images:
      "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    starrating: "⭐⭐⭐⭐",
    price: 400,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images:
      "https://rukminim2.flixcart.com/image/312/312/j9d3bm80/mobile/f/y/v/apple-iphone-x-mqa92hn-a-original-imaeyysgqbg8qmhn.jpeg?q=70",
  },
  {
    id: 3,
    title: "Galaxy S9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    starrating: "⭐⭐⭐⭐⭐",
    price: 450,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images:
      "https://rukminim2.flixcart.com/image/312/312/jeiukcw0/mobile/q/g/h/samsung-galaxy-s9-plus-sm-g965fzbdins-original-imaf372gzm4hg4eh.jpeg?q=70",
  },
  {
    id: 4,
    title: "OnePlus Nord",
    description: "OnePlus Nord is officially announced on April 2021.",
    starrating: "⭐⭐⭐⭐⭐",
    price: 300,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OnePlus",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images:
      "https://m.media-amazon.com/images/I/61nxQ62qglL._AC_UL480_QL65_.jpg",
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    starrating: "⭐⭐⭐",
    price: 200,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images:
      "https://rukminim2.flixcart.com/image/612/612/k2jbyq80pkrrdj/mobile-refurbished/x/y/b/p30-lite-128-c-marie-l22a-huawei-4-original-imafghwdpthze4pb.jpeg?q=70",
  },
];

const initialState = {
  cartProducts: Products,
  calculatedvalue: 0,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    //reducer for handling products
    case DELETE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (Product) => Product.id != action.payload
        ),
      };

    //reducer for handling total cost
    case Update_totalCost:
      return {
        ...state,
        calculatedvalue: action.payload,
      };

    default:
      return state;
  }
}

export default appReducer;
