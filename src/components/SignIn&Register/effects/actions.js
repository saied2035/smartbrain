import {
    GO_HOME,
    REGISTER,
    SIGN_IN,
    DEFAULT,
    SIGN_IN_EMAIL,
    SIGN_IN_PASSWORD,
    SIGN_IN_DEFAULT,
    SIGN_IN_REMOVE_ERROR_MSG,
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_NAME,
    REGISTER_DEFAULT,
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    USER_INFORMATION
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

        else if(target.type==='password'){
            return {
                type: SIGN_IN_PASSWORD,
                payload : target.value
            }
        }
        else {
            return {
                type : SIGN_IN_DEFAULT
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

        else if(target.type==='text'){
            return {
                type: REGISTER_NAME,
                payload : target.value
            }
        }        
        else {
            return {
                type : REGISTER_DEFAULT
            }
        }
}

export const removeErrorMsg = () => {
    return {
        type: SIGN_IN_REMOVE_ERROR_MSG
    }
}
export const setRoute = (text) => {
    if(text==='home'){
        return {
            type : GO_HOME,
            payload : text
        }
    }

    else if(text==='signIn'){
        return {
            type : SIGN_IN,
            payload : text
        }
    } 

    else if(text==='register'){
        return {
            type : REGISTER,
            payload : text
        }
    }

    else {
        return {
            type : DEFAULT,
            payload : true
        }
    }         
} 
  export const compareUser = (email,password,name='') => (request) => {
              request({type: REQUEST_PENDING,payload: true})
               if(!name.length){
              fetch('https://smart-brain-api-nile.herokuapp.com/signin', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: email,
                    password : password
                })
             })
             .then(response => response.json())
             .then(data => {
                if(!data.name) {
                 request({type:REQUEST_FAILED,payload: data})
                }
                else {
                request({type:REQUEST_SUCCESS,payload:data})
              }  
            })
             .catch(error => request({type:REQUEST_FAILED,payload: 'error'}))
         }
         else {
              fetch('https://smart-brain-api-nile.herokuapp.com/register', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: email,
                    password : password,
                    name : name
                })
             })
             .then(response => response.json())
             .then(data => {
                if(!data.name) {
                request({type:REQUEST_FAILED,payload:data})
                }
              else {
                request({type:REQUEST_SUCCESS,payload:data})
              }  
            })  
             .catch(error => request({type:REQUEST_FAILED,payload: 'error'}))            
         }    
 }

export const getUserDetailes = (user) => {
    if(user===undefined){
      return {type: "RESET"}
    }
    return {
        type: USER_INFORMATION,
        payload: user
    }
 }

