import {
    SENDING_EMAIL_PENDING,
    SENDING_EMAIL_SUCCESS,
    SENDING_EMAIL_FAILED,
    VERIFIY_EMAIL_PENDING,
    VERIFIY_EMAIL_SUCCESS,
    VERIFIY_EMAIL_FAILED
} from './constants.js'  

export const sendEmail = (email) => (request) => {
              request({type: SENDING_EMAIL_PENDING,payload: true})
              fetch('https://smart-brain-api-nile.herokuapp.com/send', {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: email
                })
             })
             .then(response => response.json())
             .then(result => {
                if(result === 'code sent Successfully') {
                 request({type:SENDING_EMAIL_SUCCESS})
                }
                else {
                 request({type:SENDING_EMAIL_FAILED,payload:result})
              }  
            })
             .catch(error => {
                request({type:SENDING_EMAIL_FAILED,payload: 'error sending request'})
            })
         
 }

export const verifyEmail = (code) => (request) => {
              request({type: VERIFIY_EMAIL_PENDING,payload: true})
              fetch('https://smart-brain-api-nile.herokuapp.com/verify', {
                method: 'delete',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    code: code
                })
             })
             .then(response => response.json())
             .then(result => {
                if(result.email) {
                 window.localStorage.setItem("user",JSON.stringify(result))   
                 request({type:VERIFIY_EMAIL_SUCCESS,payload:result})
                }
                else {
                 request({type:VERIFIY_EMAIL_FAILED,payload:result})
              }  
            })
             .catch(error => request({type:VERIFIY_EMAIL_FAILED,payload: 'error sending request'}))
         
}