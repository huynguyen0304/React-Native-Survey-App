const question = () => {
    fetch("https://my-json-server.typicode.com/huynguyen0304/Survey/db", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            // "question.title": this.state.question,
            // "question.answers.answer": this.state.answers 
        })
    })
        .then((res) => res.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.form
            })
        })
}

module.exports = question;