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
            { name: "Lettuce", price: 55.90, image: "/veg-items/Lettuce.jpg" },
            { name: "Arugula", price: 65.50, image: "/veg-items/Arugula.jpg" },
            { name: "Asparagus", price: 140.00, image: "/veg-items/Asparagus.jpg" },
            { name: "Artichoke", price: 150.80, image: "/veg-items/Artichoke.jpg" },
            { name: "Beet Greens", price: 45.90, image: "/veg-items/BeetGreens.jpg" },
            { name: "Bok Choy", price: 55.20, image: "/veg-items/BokChoy.jpg" },
            { name: "Brussels Sprouts", price: 90.50, image: "/veg-items/BrusselsSprouts.jpg" },
            { name: "Butternut Squash", price: 80.70, image: "/veg-items/ButternutSquash.jpg" },
            { name: "Celery", price: 70.20, image: "/veg-items/Celery.jpg" },
            { name: "Chard", price: 60.40, image: "/veg-items/Chard.jpg" },
            { name: "Chayote", price: 45.90, image: "/veg-items/Chayote.jpg" },
            { name: "Collard Greens", price: 75.00, image: "/veg-items/CollardGreens.jpg" },
            { name: "Daikon Radish", price: 50.30, image: "/veg-items/DaikonRadish.jpg" },
            { name: "Edamame", price: 85.90, image: "/veg-items/Edamame.jpg" },
            { name: "Endive", price: 65.40, image: "/veg-items/Endive.jpg" },
            { name: "Fennel", price: 70.30, image: "/veg-items/Fennel.jpg" },
            { name: "Green Beans", price: 60.90, image: "/veg-items/GreenBeans.jpg" },
            { name: "Jicama", price: 55.20, image: "/veg-items/Jicama.jpg" },
            { name: "Kale", price: 80.00, image: "/veg-items/Kale.jpg" },
            { name: "Kohlrabi", price: 50.80, image: "/veg-items/Kohlrabi.jpg" },
            { name: "Leeks", price: 60.70, image: "/veg-items/Leeks.jpg" },
            { name: "Mustard Greens", price: 40.50, image: "/veg-items/MustardGreens.jpg" },
            { name: "Okra", price: 48.70, image: "/veg-items/Okra.jpg" },
            { name: "Parsnips", price: 55.60, image: "/veg-items/Parsnips.jpg" },
            { name: "Radicchio", price: 65.80, image: "/veg-items/Radicchio.jpg" },
            { name: "Rutabaga", price: 50.20, image: "/veg-items/Rutabaga.jpg" },
            { name: "Shallots", price: 70.40, image: "/veg-items/Shallots.jpg" }
        ],
        nonVegItems: [

            { name: "Best Egg Curry", price: 299, image: "/non-veg-items/nonveg1.jpg" },
            { name: "Pomfret Fish", price: 749, image: "/non-veg-items/nonveg2.jpg" },
            { name: "Egg Bhurji Masala", price: 349, image: "/non-veg-items/nonveg3.jpg" },
            { name: "Mini Chicken Quiche", price: 599, image: "/non-veg-items/nonveg4.jpg" },
            { name: "Chingri Macher Malaikari", price: 899, image: "/non-veg-items/nonveg5.jpg" },
            { name: "Chilli Egg", price: 399, image: "/non-veg-items/nonveg6.jpg" },
            { name: "Dum Chicken", price: 799, image: "/non-veg-items/nonveg7.jpg" },
            { name: "Chicken Pancake", price: 649, image: "/non-veg-items/nonveg8.jpg" },
            { name: "Hyderabadi Egg Biryani", price: 849, image: "/non-veg-items/nonveg9.jpg" },
            { name: "The Hundred Foot Journey Omelette", price: 349, image: "/non-veg-items/nonveg10.jpg" },
            { name: "Mutton Chaap", price: 999, image: "/non-veg-items/nonveg11.jpg" },
            { name: "Coriander Chicken", price: 699, image: "/non-veg-items/nonveg12.jpg" },
            { name: "Half Tandoori Chicken", price: 899, image: "/non-veg-items/nonveg13.jpg" },
            { name: "Posto Chicken", price: 749, image: "/non-veg-items/nonveg14.jpg" },
            { name: "Doi Maach", price: 849, image: "/non-veg-items/nonveg15.jpg" },
            { name: "Kosha Mangsho", price: 1099, image: "/non-veg-items/nonveg16.jpg" },
            { name: "Tawa Masala Pomfret", price: 799, image: "/non-veg-items/nonveg17.jpg" },
            { name: "Goodfellas Meat Sauce", price: 649, image: "/non-veg-items/nonveg18.jpg" },
            { name: "Tandoori Prawns", price: 899, image: "/non-veg-items/nonveg19.jpg" },
            { name: "Bheja Masala", price: 849, image: "/non-veg-items/nonveg20.jpg" },
            { name: "Yakitori Chicken", price: 749, image: "/non-veg-items/nonveg21.jpg" },
            { name: "Forrest Gump Stir Fried Shrimp", price: 799, image: "/non-veg-items/nonveg22.jpg" },
            { name: "Nandu Rasam (Crab Rasam)", price: 999, image: "/non-veg-items/nonveg23.jpg" },
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
            { name: "Shrimp", price: 450.75, image: "/non-veg-items/shrimp.jpg" },

        ],
        dairyItems: [
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
        ],
        cakeItems: [
            { name: "NY Cheesecake", price: 4649, image: "/cake-items/cake1.webp" },
            { name: "Chocoholic Chiffon", price: 9349, image: "/cake-items/cake2.webp" },
            { name: "Captain America Cake", price: 7449, image: "/cake-items/cake3.webp" },
            { name: "Blueberry Yogurt Cake", price: 8849, image: "/cake-items/cake4.webp" },
            { name: "Mocha Madness Cake", price: 8949, image: "/cake-items/cake5.webp" },
            { name: "Cappuccino Cake", price: 8099, image: "/cake-items/cake6.webp" },
            { name: "Mixed Flowers Bunch And Chocolate Cake", price: 6999, image: "/cake-items/cake7.webp" },
            { name: "Grand Vanilla Cake", price: 5749, image: "/cake-items/cake8.webp" },
            { name: "Choco Licious Strawberry Cake", price: 9199, image: "/cake-items/cake9.webp" },
            { name: "Lemon Coconut Cake", price: 7299, image: "/cake-items/cake10.webp" },
            { name: "Rainbow Cake Delight", price: 9199, image: "/cake-items/cake11.webp" },
            { name: "Mixed Berry Delight Cake", price: 8699, image: "/cake-items/cake12.webp" },
            { name: "Strawberry Soft Cream Cake", price: 9199, image: "/cake-items/cake13.webp" },
            { name: "Triple Chocolate Cake", price: 8599, image: "/cake-items/cake14.webp" },
            { name: "Blueberry Chiffon Cake", price: 9349, image: "/cake-items/cake15.webp" },
            { name: "Chocolate Cake", price: 5899, image: "/cake-items/cake16.webp" },
            { name: "Superman Theme Chocolate Cake", price: 7299, image: "/cake-items/cake17.webp" },
            { name: "Tempting Chocolate Cake With Josh Cellars Wine", price: 8699, image: "/cake-items/cake18.webp" },
            { name: "Luscious Cake & Orchid Plant", price: 8349, image: "/cake-items/cake19.webp" },
            { name: "Red Velvet Chocolate Cake", price: 6499, image: "/cake-items/cake20.webp" },
            { name: "Cheesecake and Roses", price: 7199, image: "/cake-items/cake21.webp" },
            { name: "Personalized Double Chocolate Cake Happy Birthday", price: 7899, image: "/cake-items/cake22.webp" },
            { name: "Lovers Mini Assorted Cupcakes", price: 5999, image: "/cake-items/cake23.webp" },
            { name: "Berries & Chocolate Cake", price: 10749, image: "/cake-items/cake24.webp" },
            { name: "Viennese Coffee Cake Cinnamon", price: 5899, image: "/cake-items/cake25.webp" },
            { name: "Ferrero Rocher And Chocolate Cake", price: 6099, image: "/cake-items/cake26.webp" },
            { name: "New York Cheesecake", price: 5649, image: "/cake-items/cake27.webp" },
            { name: "Mixed Flowers Bouquet N Wine With Chocolate Cake", price: 10749, image: "/cake-items/cake28.webp" },
            { name: "Vanilla Cake With Personalization", price: 8299, image: "/cake-items/cake29.webp" },
            { name: "Assorted Jumbo Cup Cakes 4", price: 5199, image: "/cake-items/cake30.webp" },
            { name: "Brownie Cheesecake", price: 6199, image: "/cake-items/cake31.webp" },
        ],
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
