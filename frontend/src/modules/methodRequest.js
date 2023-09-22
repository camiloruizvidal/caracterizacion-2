import axios from "axios"
import * as config from '../config'

export function get(route, extern = false) {
	if(extern) {
		return axios.get(route);
	}

	return axios.get(config.apipath + route);

}

export function post(route, data, extern = false) {
	if(extern) {
		return axios.post(route, data);
	}

	return axios.post(config.apipath + route, data);
}

export function put(route, data, extern = false) {
	if(extern) {
		return axios.put(route, data);
	}

	return axios.put(config.apipath + route, data);
}

export function del(route, extern = false) {
	if(extern) {
		return axios.delete(route);
	}

	return axios.delete(config.apipath + route);
}