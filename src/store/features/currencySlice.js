import { createSlice } from "@reduxjs/toolkit"

const currencySlice = createSlice({
	name: 'currency',
	initialState: {
		changeStatus: false,
		mainValuteValue: 'USD',
		secondaryValuteValue: 'RUB',
		exchangeRate: 0,
	},
	reducers: {
		changeValutes: (state, {payload}) => {
			state.changeStatus = !state.changeStatus
			if (state.changeStatus) {
				state.mainValuteValue = '1 RUB';
				state.secondaryValuteValue = `${(
          1 /
          (payload.valute?.Value / payload.valute?.Nominal)
				).toFixed(4)} ${payload.valute?.CharCode}`;
				state.exchangeRate =
				1 / (payload.valute?.Value / payload.valute?.Nominal) -
				1 / (payload.valute?.Previous / payload.valute?.Nominal);
			} else {
				state.mainValuteValue = `1 ${payload.valute?.CharCode}`;
        state.secondaryValuteValue = `${payload.valute?.Value / payload.valute?.Nominal} RUB`;
        state.exchangeRate =
          (payload.valute?.Value - payload.valute?.Previous) / payload.valute?.Nominal;
			}
		},
		setCurrency(state, action) {
			state.mainValuteValue = action.payload.mainValuteValue + ' 100$';
			state.secondaryValuteValue = action.payload.secondaryValuteValue + ' 1000₽';
			console.log('setCurrency', action.payload);
		}
	}
})
export const { changeValutes, setCurrency } = currencySlice.actions
export default currencySlice.reducer