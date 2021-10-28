
// const data = {
//     username: "Petr",
//     email: "petr@example.com",
//     first_name: "Petr",
//     last_name: "Petrov"
// }

async function postFormData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });

    return await  response.json();
}


export default postFormData;