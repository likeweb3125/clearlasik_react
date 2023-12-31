import { createSlice } from "@reduxjs/toolkit";

const common = createSlice({
    name: "common", //state 이름
    initialState: {
        boardMenu:[],
        boardSettingData:{},
        alarm:false,
        siteInfo:{},
        siteInfoEdit:false,
    },
    reducers:{
        boardMenu: (state, action) => {
            state.boardMenu = action.payload;
        },
        boardSettingData: (state, action) => {
            state.boardSettingData = action.payload;
        },
        alarm: (state, action) => {
            state.alarm = action.payload;
        },
        siteInfo: (state, action) => {
            state.siteInfo = action.payload;
        },
        siteInfoEdit: (state, action) => {
            state.siteInfoEdit = action.payload;
        },
    }
});

export const { 
    boardMenu,
    boardSettingData,
    alarm,
    siteInfo,
    siteInfoEdit
} = common.actions;
export default common;