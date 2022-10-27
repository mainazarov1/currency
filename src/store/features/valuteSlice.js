import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { valuteService } from '../../services/valuteService'

export const getValute = createAsyncThunk(
	'valute/getValute',
	async (data, thunkAPI) => {
		try {
			const response = await valuteService.getValute(data)
			return response.Valute
		} catch (error) {
			const message = error.response.data.message
			return thunkAPI.rejectWithValue(message)
		}
	}
)

const valuteSlice = createSlice({
	name: 'valute',
	initialState: {
		valute: {}
	},
	reducers: {
		// setValute(state, action) {
		// 	state.valute = action.payload
		// }
	},
	extraReducers: (builder) => {
		builder.addCase(getValute.fulfilled, (state, action) => {
			state.valute = action.payload
		})
	}
	// {
	// 	[getValute.fulfilled]: (state, action) => {
	// 		state.valute = action.payload.Valute
	// 	}
	// }
})
export const { setValute } = valuteSlice.actions
export default valuteSlice.reducer

