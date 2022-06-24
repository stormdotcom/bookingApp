const baseURL = 'http://localhost:4000/api';
const requestOptionsPOST = {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
      },
}

export const login = async (formData)=> {
    const body = JSON.stringify(formData)
    const response = await fetch(baseURL+'/auth/login', {...requestOptionsPOST, body})
    console.log(response)
}