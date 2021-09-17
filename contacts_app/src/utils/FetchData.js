var users = [];

async function fetchData() {
    const response = axios.get('https://randomuser.me/api/')
    .then((response) => {
        const results = response.data.results[0]; 

        const user = {
            "firstName": results.name.first, 
            "lastName": results.name.last,
            "email": results.email,
            "phone":results.phone,
            "street":results.location.street.number + " " + results.location.street.name,
            "city":results.location.city,
            "state":results.location.state,
            "postcode":results.location.postcode,
            "photo":results.picture.large,
        }
            users.push(user)
        return user;
    })
}

function loadData() {
    return fetchData();
}



export {loadData};