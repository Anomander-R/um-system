import baseUrl from "../config";



const create = user =>{
    return fetch(`${baseUrl}/api/users/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(err => console.log(err));

    
}

const list = ()=>{
    return fetch(`${baseUrl}/api/users`, {method: 'GET'})
        .then(response => response.json())
        .catch(err=>console.log(err));
}

const read =(params)=>{
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch((err)=>console.log(err));
}


const update = (params, user) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
        .then(response => {
            console.log(response.json);
            return response.json()
        })
        .catch((err)=>console.log(err));
};

const remove = (params) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch((err)=>console.log(err));
}

export { create, list, read, update, remove };