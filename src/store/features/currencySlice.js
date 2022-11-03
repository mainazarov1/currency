import { createSlice } from "@reduxjs/toolkit"
const currencySlice = createSlice({
	name: 'currency',
	initialState: {
		changeStatus: false,
		mainValute: 'USD',
		secondaryValute: 'KGS',
		mainValue: '',
		secondaryValue: '',
	},
	reducers: {
		changeValutes: (state) => {
			[state.mainValute, state.secondaryValute] = [state.secondaryValute, state.mainValute]
		},
		changeSecondaryValue: (state, { payload: { mainValue, mainValute, secondaryValute } }) => {
			state.secondaryValue = (+mainValue * ((mainValute?.Value / mainValute?.Nominal) / (secondaryValute?.Value / secondaryValute?.Nominal))).toFixed(4)
		},
		changeSelectValute: (state, { payload: { name, value } }) => {
			if (name === 'mainValute') {
				state.mainValute = value;
			} else {
				state.secondaryValute = value;
			}
		},
		changeMainValue: (state, { payload }) => {
			state.mainValue = payload;
		}
	}
})
export const { changeSelectValute, changeValutes, changeSecondaryValue, changeMainValue } = currencySlice.actions
export default currencySlice.reducer