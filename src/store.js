//store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';


//Product Slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        vegItems: [
            { name: "Paneer", price: 250.54, image: "/veg-items/Paneer.jpeg" },
            { name: "Tomato", price: 40.00, image: "/veg-items/Tomato.jpg" },
            { name: "Potato", price: 30.90, image: "/veg-items/Potato.jpg" },
            { name: "Onion", price: 50.20, image: "/veg-items/Onion.jpg" },
            { name: "Carrot", price: 60.00, image: "/veg-items/Carrot.jpg" },
            { name: "Cabbage", price: 25.00, image: "/veg-items/Cabbage.jpg" },
            { name: "Broccoli", price: 80.75, image: "/veg-items/Broccoli.jpg" },
            { name: "Spinach", price: 45.00, image: "/veg-items/Spinach.jpg" },
            { name: "Capsicum", price: 70.40, image: "/veg-items/Capsicum.jpg" },
            { name: "Mushroom", price: 120.90, image: "/veg-items/Mushrooms.jpg" },
            { name: "Sweet Corn", price: 35.60, image: "/veg-items/SweetCord.jpg" },
            { name: "Peas", price: 90.50, image: "/veg-items/Peas.jpg" },
            { name: "Garlic", price: 150.00, image: "/veg-items/Garlic.jpg" },
            { name: "Ginger", price: 200.80, image: "/veg-items/Ginger.jpg" },
            { name: "Cucumber", price: 30.00, image: "/veg-items/Cucumber.jpg" },
            { name: "Lettuce", price: 55.90, image: "/veg-items/Lettuce.jpg" }
        ],
        nonVegItems: [
            { name: "Chicken", price: 300.80, image: "/non-veg-items/chicken.jpg" },
            { name: "Mutton", price: 600.60, image: "/non-veg-items/mutton.jpg" },
            { name: "Fish", price: 400.54, image: "/non-veg-items/fish.jpg" },
            { name: "Lobster", price: 500.21, image: "/non-veg-items/prawns.jpg" },
            { name: "Eggs", price: 60.00, image: "/non-veg-items/eggs.jpg" },
            { name: "Crab", price: 700.00, image: "/non-veg-items/crabs.jpg" },
            { name: "Squid", price: 600.90, image: "/non-veg-items/squid.jpg" },
            { name: "Salmon", price: 950.75, image: "/non-veg-items/salmon.jpg" },
            { name: "Octopus", price: 1100.10, image: "/non-veg-items/octopus.jpg" },
            { name: "Turkey", price: 400.40, image: "/non-veg-items/turkey.jpg" },
            { name: "Clams", price: 300.30, image: "/non-veg-items/clams.jpg" },
            { name: "Shrimp", price: 450.75, image: "/non-veg-items/shrimp.jpg" }
        ],
        dairyItems:[
                { name: "Amul (Milk)", company: "Amul", price: 50.36, image: "/dairy-items/amul-mild.jpg" },
                { name: "Dinshaw (Milk)", company: "Dinshaw", price: 250.99, image: "/dairy-items/dinshaw-milk.webp" },
                { name: "Mother Dairy (Curd)", company: "Mother Dairy", price: 55.00, image: "/dairy-items/mother-dairy-curd.jpg" },
                { name: "Britannia (Ghee)", company: "Britannia", price: 270.50, image: "/dairy-items/britannia-ghee.jpg" },
                { name: "Nestle (Milk)", company: "Nestle", price: 100.45, image: "/dairy-items/nestle-milk.jpg" },
                { name: "Amul (Butter)", company: "Amul", price: 200.00, image: "/dairy-items/amul-butter.jpg" },
                { name: "Amul (Yogurt)", company: "Amul", price: 52.00, image: "/dairy-items/amul-yoghurt.jpg" },
                { name: "Dinshaw (Paneer)", company: "Dinshaw", price: 249.50, image: "/dairy-items/dinshaw-panner.jpg" },
                { name: "Mother Dairy (Ghee)", company: "Mother Dairy", price: 300.00, image: "/dairy-items/mother-dairy-ghee.jpg" },
                { name: "Amul (Cheese)", company: "Amul", price: 199.99, image: "/dairy-items/amul-cheese.jpg" },
                { name: "Amul (Ghee)", company: "Amul", price: 51.20, image: "/dairy-items/amul-ghee.jpg" }
            ]
    },
    reducers: {}
});

//Cart Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("cart") || "[]"),
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state)); 
        },
        increament: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state)); 
        },
        decreament: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state)); 
            } else {
                const updatedState = state.filter(item => item.name !== action.payload.name);
                localStorage.setItem("cart", JSON.stringify(updatedState)); 
                return updatedState; 
            }
        },
        remove: (state, action) => {
            const updatedState = state.filter(item => item.name !== action.payload.name);
            localStorage.setItem("cart", JSON.stringify(updatedState)); 
            return updatedState;
        },
        clearCart: () => {
            localStorage.setItem("cart", JSON.stringify([])); 
            return [];
        }
    }
});

//purchaseDetails Slice
const purchaseDetailsSlice = createSlice({
    name: "purchaseDetails",
    initialState: {
        orderDetails: JSON.parse(localStorage.getItem("orderDetails") || "[]")  
    },
    reducers: {
        addToOrders(state, action) {
            state.orderDetails.push(action.payload);
            localStorage.setItem("orderDetails", JSON.stringify(state.orderDetails));  
        },
    },
});


// Auth Slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || "",
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = "";
            localStorage.removeItem("username");
            localStorage.removeItem("cart");
            localStorage.removeItem("orderDetails");
        },
    }
});

// Store Configuration
const Store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchaseDetails: purchaseDetailsSlice.reducer,
        auth: authSlice.reducer,
    }
});

export default Store;
export const { addToCart, increament, decreament, remove, clearCart } = cartSlice.actions;
export const { addToOrders } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;
