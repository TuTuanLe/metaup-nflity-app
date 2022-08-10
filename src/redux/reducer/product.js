import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: {
    products: [],
    appError: '',
  },
  reducers: {
    SET_PRODUCT: (state, action) => {
      products: action.payload;
    },
    FETCH_PRODUCTS: state => {
      state.products = [
        {
          id: '1',
          name: 'KONGZ#2253',
          des: 'projectkongz',
          price: '156,300',
          image: require('@assets/images/image.png'),
        },
        {
          id: '2',
          name: ' #7591',
          des: 'FLUF World',
          price: '156,300',
          image: require('@assets/images/image1.png'),
        },
        {
          id: '3',
          name: 'adidas Originals: Into the ...',
          des: 'adidas Originals Into the Metaverse',
          price: '156,300',
          image: require('@assets/images/image2.png'),
        },
        {
          id: '4',
          name: 'War in Ukraine: Support f...',
          des: 'Ukraine response',
          price: '156,300',
          image: require('@assets/images/image3.png'),
        },
      ];
    },
    ON_ERROR: (state, action) => {
      products: action.payload;
    },
  },
});

export const {SET_PRODUCT, FETCH_PRODUCTS, ON_ERROR} = ProductSlice.actions;

export default ProductSlice.reducer;
