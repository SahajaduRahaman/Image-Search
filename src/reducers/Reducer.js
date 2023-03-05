const initialPage = 1;

const Reducer = (state = initialPage, action) => {
    switch (action.type) {
        case "INCREASE" : return state + 1;
        case "DECREASE" : return state < 2 ? state : state - 1;
        case "HOMEPAGE" : return state = 1;
        default : return state;
    }
}

export default Reducer;