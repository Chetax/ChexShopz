import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice({
    name:"Cart",
    initialtate:[],
    reducers:{
    add: ()=>{},
    remove:()=>{}
    }
}
)

export const {add , remove } = CartSlice.actions;
export default CartSlice.reducer