import {
    REGISTER,
    SIGN_IN,
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD,
    SIGN_IN_DEFAULT,
    REMOVE_ERROR_MSG,
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME,
    REGISTER_DEFAULT,
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './constants.js'

export const checkUser = (target) => {
        if (target===undefined) {
            return {
                type : SIGN_IN_DEFAULT
            }
           } 
        if(target.type==='email'){
            return {
                type: SIGN_IN_EMAIL,
                payload :target.value
            }
        }

        else {
            return {
                type: SIGN_IN_PASSWORD,
                payload : target.value
            }
        }
}

export const newUser = (target) => {
        if (target===undefined) {
            return {
                type : REGISTER_DEFAULT
            }
        }
        if(target.type==='email'){
            return {
                type: REGISTER_EMAIL,
                payload : target.value
            }
        }

        else if(target.type==='password'){
            return {
                type: REGISTER_PASSWORD,
                payload : target.value
            }
        }

        else {
            return {
                type: REGISTER_NAME,
                payload : target.value
            }
        }
}

export const removeErrorMsg = () => {
    return {
        type: REMOVE_ERROR_MSG
    }
}
export const setRoute = (text) => {
    
    if(text==='signIn'){
        return {
            type : SIGN_IN,
            payload : text
        }
    } 

    else {
        return {
            type : REGISTER,
            payload : text
        }
    } 
} 
  export const compareUser = (props) => (request) => {
              request({type: REQUEST_PENDING,payload: true})
               if(!Object.keys(props).includes("name")){
              fetch('https://fabulous-zephyr-production.up.railway.app/signin', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: props.email,
                    password : props.password
                })
             })
             .then(response => response.json())
             .then(data => {
                if(!data.name) {
                 request({type:REQUEST_FAILED,payload: data})
                }
                else {
                  window.localStorage.setItem("user",JSON.stringify(data))  
                 request({type:REQUEST_SUCCESS,payload:data})
              }  
            })
             .catch(error => request({type:REQUEST_FAILED,payload: 'error sending request'}))
         }
         else {
              fetch('https://fabulous-zephyr-production.up.railway.app/register', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: props.email,
                    password : props.password,
                    name : props.name
                })
             })
             .then(response => response.json())
             .then(data => {
                if(!data.email) {
                request({type:REQUEST_FAILED,payload:data})
                }
              else {
                window.localStorage.setItem("user",JSON.stringify(data))
                request({type:REQUEST_SUCCESS,payload:data})
              }  
            })  
             .catch(error => request({type:REQUEST_FAILED,payload: 'error sending request'}))            
         }    
 }


