import langSlice from "./langSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        lang: langSlice
    }
})

export default store