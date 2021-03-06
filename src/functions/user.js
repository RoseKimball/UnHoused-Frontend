import axios from 'axios';

export const userCart = async (authtoken, cart) => {
    return await axios.post(`${process.env.REACT_APP_API}/user/cart`, {cart}, {
        headers: {
            authtoken,
        }
    })
}

export const getUserCart = async (authtoken) => {
    // console.log('authtoken recieved in get req', authtoken)
    return await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
        headers: {
            authtoken,
        }
    })
}

export const emptyUserCart = async (authtoken) => {
    console.log('authtoken recieved in put req', authtoken)
    return await axios.put(`${process.env.REACT_APP_API}/user/cart`, {}, {
        headers: {
            authtoken,
        }
    })
}

export const setUserAddress = async (authtoken, address) => {
    return await axios.post(`${process.env.REACT_APP_API}/user/address`, {address}, {
        headers: {
            authtoken,
        }
    })
}
