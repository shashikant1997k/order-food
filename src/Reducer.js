
let token = localStorage.getItem("auth_token");
export const initialState = {
    phone: '',
    token: token ? token : 0
}

const Reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                phone: action.phone
            }

        case "OTP_SUMBITTED":
            return{
                ...state,
                token: action.token
            }
        case "LOGOUT":
            return{
                ...state,
                token: action.token,
                phone: action.phone
            }
        
        default:
            return state
    }
}

export default Reducer;