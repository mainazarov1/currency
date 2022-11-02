import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
const currencySlice = createSlice({
	name: 'currency',
	initialState: {
		changeStatus: false,
		mainValute: 'USD',
		secondaryValute: 'KGS',
	},
	reducers: {
		changeCurrencyValutes: (state, { payload }) => {
			
		},
	}
})
export const { changeCurrencyValutes } = currencySlice.actions
export default currencySlice.reducer