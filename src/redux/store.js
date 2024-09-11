import {configureStore} from '@reduxjs/toolkit';

import gatewayReducer from './features/gateway/gatewaySlice';

export default configureStore({
    reducer: {
        gateway: gatewayReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

