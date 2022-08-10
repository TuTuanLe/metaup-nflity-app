export const onFetchProduct = () => {
  return async dispatch => {
    try {
      const response = {
        data: [
          {
            id: '1',
            name: 'KONGZ#2253',
            des: 'projectkongz',
            price: '156,300',
            image: require('@src/assets/images/image.png'),
          },
          {
            id: '2',
            name: ' #7591',
            des: 'FLUF World',
            price: '156,300',
            image: require('@src/assets/images/image1.png'),
          },
          {
            id: '3',
            name: 'adidas Originals: Into the ...',
            des: 'adidas Originals Into the Metaverse',
            price: '156,300',
            image: require('@src/assets/images/image2.png'),
          },
          {
            id: '4',
            name: 'War in Ukraine: Support f...',
            des: 'Ukraine response',
            price: '156,300',
            image: require('@src/assets/images/image3.png'),
          },
        ],
      };
      dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
    } catch (error) {
      dispatch({type: 'ON_ERROR', payload: error});
    }
  };
};
