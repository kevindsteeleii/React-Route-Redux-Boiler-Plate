
const initialState = {
  // add the defaults here
  testState: 'test state'
}

const root = (state = initialState, { type, payload }) => {
  const copyState = {...state};
  switch (type) {
    case 'TEST_TYPE':
      copyState.test = payload;
      return copyState;
      
      default:
      return state;
  }
}

export default root