//ALGO
// 1 READ FORM DATA
// 2 SEND REQUEST AND HANDLE RES
// 3 VALIDATE

const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

const user = {
    name: 'Roy Jones',
    city: 'NY'
}

const createUser = user => {
    return fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            handleErrors(res.status)
        })
        .then(userBody => console.log(JSON.stringify(userBody)))
        .catch((error) => {
            alert(error)
        })
}

const createUserAsyncAwait = async ()user => {
    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        const res = await response.json()
        return res
    }
    handleErrors(response.status)

}



const handleErrors = status => {
    if (status === 400) {
        throw new Error('User data is not correct')
    }
    if (status === 500) {
        throw new Error('Try again later')
    }
}