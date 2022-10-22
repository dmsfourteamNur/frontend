
const login = ({ usr, pass }) => {
	return new Promise((resolv, reject) => {
		fetch(`https://jtoken.azurewebsites.net/api/token/${usr}/${pass}`, {
			method: 'GET',
			redirect: 'follow',
		}).then(result => result.text()).then(result => {
			if (!result) {
				reject("Error en los datos");
				return;
			}
			localStorage.setItem("jwt", result);
			resolv(result);
		}).catch(error => {
			reject(error);
		});
	})
}
const logout = () => {
	localStorage.setItem("jwt", "");
	window.location.href = "/";
	return null
}
const getUser = () => {
	var token = getToken();
	if (!token) return null;
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(jsonPayload);
}
const getToken = () => {
	return localStorage.getItem("jwt");
}

const block_noUser = () => {

}

export default {
	login,
	logout,
	getUser,
	getToken
}