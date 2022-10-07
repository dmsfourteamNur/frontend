export default class Http {

    static POST = (URL, body) => {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'POST',
                redirect: 'follow',
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    }
    static GET = (URL) => {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'GET',
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    }

    static PUT = (URL, body) => {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'PUT',
                redirect: 'follow',
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    }
    static DELETE = (URL) => {
        return new Promise((resolve, reject) => {
            fetch(URL, {
                method: 'DELETE',
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error => reject(error));
        });
    }
}