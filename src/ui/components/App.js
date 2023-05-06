import {Footer, Navbar} from "./index";
import {Container} from "@mui/material";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {ProductsInformation, Main, CategoryInformation, ProductInformation} from "../pages";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Account from "../pages/Account";
import {AuthContextProvider} from "../../context/AuthContext";
import ProtectedRoute from "../ProtectedRoute";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Container fixed>
                    <AuthContextProvider>
                        <Routes>
                            <Route exact path="/product/:id" element={<ProductsInformation/>}/>
                            <Route exact path="/category/:root?/:secondRoot?/:thirdRoot"
                                   element={<CategoryInformation/>}/>
                            <Route exact path="/" element={<Main/>}/>
                            <Route exact path="/products/:query" element={<ProductInformation/>}/>
                            <Route exact path="/signin" element={<Signin/>}/>
                            <Route exact path="/signup" element={<Signup/>}/>
                            <Route exact path="/account" element={<Account/>}/>
                        </Routes>
                    </AuthContextProvider>
                </Container>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
