export default class Http{

    static Get(){
        return new Promise((resolve,reject)=>{
                resolve("respuesta GET")

                reject("aqui entra al catch")
        })
    }

    static post(){
        return new Promise((resolve,reject)=>{
                resolve("respuesta POST")

                reject("aqui entra al catch")
        })
    }

    static put(){
        return new Promise((resolve,reject)=>{
                resolve("respuesta PUT")

                reject("aqui entra al catch")
        })
    }

}
