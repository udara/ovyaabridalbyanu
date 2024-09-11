import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    payment: null
}

export const getPaymentLink = createAsyncThunk('getPaymentLink/gateway',
    async (paymentLink, thunkAPI) => {
        try {
            const res = await axios.get(
                `${SiteConfig.APIEndpoint}/gateway/get/${paymentLink}`
            );

            if (res.status === 200) {
                return res.data;
            }

        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    });

const gatewaySlice = createSlice({
    name: 'gateway',
    initialState,
    reducers: {
        resetGatewayReducer: () => initialState,
    },

    extraReducers: (builder => {
        builder.addCase(getPaymentLink.pending, (state) => {
            return {
                ...state,
                loading: true,
                payment: null,
                error: null
            };
        })
        builder.addCase(getPaymentLink.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                payment: action.payload
            };
        })
        builder.addCase(getPaymentLink.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                payment: null,
                error: action.payload
            };
        })
    })
});

export default gatewaySlice.reducer;
export const {} = gatewaySlice.actions