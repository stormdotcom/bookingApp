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
    try {
        const body = JSON.stringify(formData)
        const response = await fetch(baseURL+'/auth/login', {...requestOptionsPOST, body})
        return response
    } catch (exception) {
        console.log(exception)
        return {
            error: true,
            message:exception.response?.data,
        }
    }

}