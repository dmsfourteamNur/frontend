export default class Http {

    static POST = (path) => {

    }
    static GET = (path) => {
        return fetch(path, {})
    }
}