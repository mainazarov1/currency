import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./features/currencySlice";
import valuteSlice from "./features/valuteSlice";

export const store = configureStore({
	reducer: {
		valute: valuteSlice,
		currency: currencySlice,
	}
});
