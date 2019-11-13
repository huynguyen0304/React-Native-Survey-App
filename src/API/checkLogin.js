const checkLogin = (token) => (
    fetch('https://my-json-server.typicode.com/huynguyen0304/Survey/db',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = checkLogin;