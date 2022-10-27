import { api } from "../api/api"

const getValute = async () => {
	const response = await api.get('daily_json.js').then((response) => response.data)
	return response
}
export const valuteService = { getValute };