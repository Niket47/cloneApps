import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../services/authCalls";

const GET_PRODUCTS_ACTION = "getProductsAction";
export const getProductsAction = createAsyncThunk(
    GET_PRODUCTS_ACTION,
    async (data) => {
        try {
            const response = await AuthService.loginCall(data)
            return response
        } catch (error: any) {
            return error?.response;
        }
    }
)
