import React, {useState} from 'react'
import '../../index.css'
import {Modal, Box, MenuItem, Select, Button, Rating, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";
import {db} from "../../engine/firebase";

const Product = ({products,excludeFirst,position}) => {

    const [quickLookStates, setQuickLookStates] = useState(Array(products.data.length).fill(false));


    const [select, setSelect] = useState('');

    const [selectedProduct, setSelectedProduct] = useState(null);

    const userId = localStorage.getItem('userId');

    const startFrom = excludeFirst ? 1 : 0;

    const handleAddToFavorite = async () => {
        if (selectedProduct === undefined) {
            console.error("Error: selectedProduct is undefined");
            return;
        }
        console.log(selectedProduct)
        try {
            const docRef =  doc(db,"/users",`/${userId}`);
            await updateDoc(docRef, {
                favorites: arrayUnion({
                    productId: selectedProduct.id,
                    productImg: selectedProduct.attributes['image-urls'][0],
                    productName: selectedProduct.attributes.name,
                    productPrice: `$${((selectedProduct.attributes.price)/1000).toFixed(2)}`
                })
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 932,
        height: 420,
        bgcolor: 'background.paper',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };

    const onMouseEnter = (index) => {
        setQuickLookStates((prev) => {
            const newStates = [...prev];
            newStates[index] = true;
            return newStates;
        });
    };

    const onMouseLeave = (index) => {
        setQuickLookStates((prev) => {
            const newStates = [...prev];
            newStates[index] = false;
            return newStates;
        });
    };

    const handleQuickLookClick = (product) => {
        setSelectedProduct(product);
        setSelect('');
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div className={` ${position ?  'flex flex-row' : ''}`}>
            {products.data.slice(startFrom,excludeFirst).map((product, index) => (
                <div
                    key={index}
                    className="border border-none shadow-[0_5px_10px_0_rgba(0,0,0,0.5)] rounded-lg hvr-float m-4 cursor-pointer"
                    style={{width: "198px", height: "261.5px"}}
                    onMouseEnter={() => onMouseEnter(index)}
                    onMouseLeave={() => onMouseLeave(index)}
                >
                    <div className="relative">
                        <div className="flex justify-center ">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    alt={`product-${product.id}`}
                                    className="mb-4 rounded-xl"
                                    style={{width: "166px", height: "166px"}}
                                    src={product.attributes["image-urls"][0]}
                                />
                            </Link>
                        </div>
                        {quickLookStates[index] && (
                            <div>
                                <button
                                    className="absolute bottom-2  border-none rounded hover:bg-[rgba(0,0,0,0.5)] w-40 left-4 cursor-pointer bg-[#000000B3] h-8"
                                    onClick={() => handleQuickLookClick(product)}
                                >
                                    <span className="text-white font-sans text-sm">
                                       QuickLook
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="pt-4 text-center font-sans text-sm font-bold ">
                        <p className="break-words">{product.attributes.name.length > 75 ? product.attributes.name.slice(0,75) : product.attributes.name}</p>
                    </div>
                </div>
            ))}
            {selectedProduct && (
                <Modal
                    open={Boolean(selectedProduct)}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="flex flex-row">
                        <Box>
                            <Box>
                                <Link to={`/product/${selectedProduct.id}`}>
                                    <img alt="product" className="w-[300px] h-[300px] object-contain"
                                         src={selectedProduct.attributes["image-urls"][0]}/>
                                </Link>
                            </Box>

                            <Box className="flex flex-row mt-4">
                                <Tooltip disableTouchListener title={`${selectedProduct.attributes.rating} / 5`}
                                         className="ml-6">
                                    <div>
                                        <Rating readOnly value={selectedProduct.attributes.rating} precision={0.1}/>
                                    </div>
                                </Tooltip>
                                <span className="ml-4"> | </span>
                                <Box className="ml-4 font-sans font-bold">
                                    {(selectedProduct.attributes["reviews-count"])} reviews
                                </Box>
                            </Box>
                        </Box>
                        <Box className="w-[564px] pl-4 ">
                            <Link to={`/product/${selectedProduct.id}`}><p className="font-sans text-base font-bold">{selectedProduct.attributes.name}</p></Link>
                            <p className="mt-2 font-sans text-xs decoration-gray-400">{selectedProduct.attributes.heading ? `SIZE
                                / ${selectedProduct.attributes.heading} •` : ''} ITEM {selectedProduct.id}</p>
                            <p className="mt-2 font-sans">{(selectedProduct.attributes.description).slice(0,400).replace("<br><br>", "")}</p>
                            <Link to={`product/${selectedProduct.id}`}><p className="mt-2 relative left-[410px] underline decoration-blue-600 font-sans cursor-pointer">See
                                product details</p></Link>
                            <Box
                                className={`flex flex-row ${selectedProduct.attributes.description.length > 190 ? 'mt-10' : 'mt-32'} h-[120px] absolute`}>
                                <Box className="flex flex-row">
                                    <p
                                        className="w-[70px] text-base font-bold">$ {(selectedProduct.attributes.price / 100).toFixed(2)}</p>
                                    <Select
                                        className="ml-64 w-[50px] h-[56px]"
                                        displayEmpty
                                        inputProps={{'aria-label': 'Without label'}}
                                        value={select}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                        <MenuItem value="4">4</MenuItem>
                                        <MenuItem value="5">5</MenuItem>
                                        <MenuItem value="6">6</MenuItem>
                                        <MenuItem value="7">7</MenuItem>
                                        <MenuItem value="8">8</MenuItem>
                                        <MenuItem value="9">9</MenuItem>
                                        <MenuItem value="10">10</MenuItem>
                                    </Select>
                                </Box>
                                <Box className="flex flex-col w-[166px] h-[120px] ml-4">
                                    <Box className="mb-2">
                                        <Button className="w-full" variant="contained" disabled={userId === null} onClick={handleAddToFavorite}>Add to Basket</Button>
                                    </Box>
                                    <Box className="w-full">
                                        <Button className="w-full" variant="contained">Add to Loves</Button>
                                    </Box>

                                </Box>
                            </Box>
                            <CloseIcon className="absolute left-[880px] top-[30px]" onClick={handleClose}/>
                        </Box>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default Product
