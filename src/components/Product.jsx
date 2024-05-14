import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { FaMobile } from "react-icons/fa";
import '../style/product.css'

function Product() {

    const [togglebtn, setToggleBtn] = useState({
        get_All_product: false,
        get_Single_product: false,
        get_filter_product : false,
        get_filter_product_min_max:false
    });

    const handleGAP = () => {
        setToggleBtn({
            get_All_product: !togglebtn.get_All_product
        })
    }
    const handleGSP = () => {
        setToggleBtn({
            get_Single_product: !togglebtn.get_Single_product
        })
    }
    const handleGFP = () => {
        setToggleBtn({
            get_filter_product: !togglebtn.get_filter_product
        })
    }
    const handleGFPMM = () => {
        setToggleBtn({
            get_filter_product_min_max: !togglebtn.get_filter_product_min_max
        })
    }

    return (
        <div className='product'>
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9 pt-4">
                    <div className='hui'>
                        <h3>Doc</h3>
                        <p>You can use examples below to check how DummyJSON works.</p>
                    </div>
                    <hr />
                    <h5 className='h5'><FaMobile /> Product</h5>
                    <div className='get_all_product mb-4' id='gaproduct'>
                        <h4>Get all products</h4>
                        <div className='test_box'>
                            <h6>fetch(<code>'https://product-api-ahxv.onrender.com/products'</code>) <br />.then({`res => res.json()`}) <br />.then(console.log());</h6>
                        </div>
                        <button onClick={handleGAP} className='mt-3'>Show Response</button>
                        <div className={`get_all_product_box ${togglebtn.get_All_product ? 'show_btn' : 'hide_btn'}`}>
                            <h6>{`[`}</h6>
                            <h6 className='ms-3'>{`{`}</h6>
                            <div>
                                <h5>"id": <span>6</span></h5>
                                <h5>"productname": <span>Samsung Z Fold 4 5G 512GB</span></h5>
                                <h5>"brand": <span>Samsung</span></h5>
                                <h5>"rating": <span>4.6</span></h5>
                                <h5>"category": <span>mobile</span></h5>
                                <h5>"price": <span>167998</span></h5>
                                <h5>"stock": <span>23</span></h5>
                                <h5>"images":{` [`}</h5>
                                <div className='img_link'>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/Samsung-Z-Fold-4-5G-12GB1TB-Beige-2.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/Samsung-Z-Fold-4-5G-imag 2.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/Samsung-Z-Fold-4-5G-image 3.webp"</span></h5>
                                </div>
                                <h5>{`]`}</h5>
                                <h5>"specification":{` [`}</h5>
                                <div className='specification'>
                                    {
                                        <>
                                            <h6>"rom": <span>"512 GB ROM"</span></h6>
                                            <h6>"display": <span>"7.6 inches (19.3 cm) Qualcomm Snapdragon 8 Plus Gen 1"</span></h6>
                                            <h6>"camera": <span>"50 MP + 12 MP + 10 MP"</span></h6>
                                            <h6>"processor": <span>"Qualcomm Snapdragon 8 Plus Gen 1"</span></h6></>
                                    }

                                </div>
                                <h5>{`]`}</h5>
                            </div>
                            <h6 className='ms-3'>{`},`}</h6>
                            <span className='ms-3'>{`upto 36 products.. `}</span>
                            <h6>{`]`}</h6>
                        </div>
                    </div>
                    <hr />
                    <div className='get_single_product mb-4' id='gsproduct'>
                        <h4>Get the Single Products</h4>
                        <div className='test_box'>
                            <h6>fetch(<code>'https://product-api-ahxv.onrender.com/products/1'</code>) <br />.then({`res => res.json()`}) <br />.then(console.log());</h6>
                        </div>
                        <button onClick={handleGSP} className='mt-3'>Show Response</button>
                        <div className={`get_single_product_box ${togglebtn.get_Single_product ? 'show_btn' : 'hide_btn'}`}>
                            <h6 className='ms-3'>{`{`}</h6>
                            <div>
                                <h5>"id": <span>1</span></h5>
                                <h5>"productname": <span>iPhone 14 Pro Max 1TB</span></h5>
                                <h5>"brand": <span>iPhone</span></h5>
                                <h5>"rating": <span>4.5</span></h5>
                                <h5>"category": <span>mobile</span></h5>
                                <h5>"price": <span>189900</span></h5>
                                <h5>"stock": <span>14</span></h5>
                                <h5>"images":{` [`}</h5>
                                <div className='img_link'>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max-Imag 3.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/I-Phone 14 Pro Max image 2.webp"</span></h5>
                                </div>
                                <h5>{`]`}</h5>
                                <h5>"specification":{` [`}</h5>
                                <div className='specification'>
                                    {
                                        <>
                                            <h6>"rom": <span>"1 TB ROM\"</span></h6>
                                            <h6>"display": <span>"17.02 cm (6.7 inch) Super Retina XDR Display"</span></h6>
                                            <h6>"camera": <span>"48MP + 12MP + 12MP + 12MP | 12MP Front Camera"</span></h6>
                                            <h6>"processor": <span>"A16 Bionic Chip, 6 Core Processor Processor"</span></h6></>
                                    }

                                </div>
                                <h5>{`]`}</h5>
                            </div>
                            <h6 className='ms-3'>{`}`}</h6>
                        </div>
                    </div>
                    <hr />
                    <div className='get_filter_product mb-4' id='gfproduct'>
                        <h4>Filter Products</h4>
                        <p className='p'>** eg: category = 'brand' , value = 'iPhone' <br /> // Optional you can use more than one category with '&' like : product/filter?category=value&category=value</p>
                        <div className='test_box'>
                            <h6>fetch(<code>'https://product-api-ahxv.onrender.com/product/filter?category=value'</code>) <br />.then({`res => res.json()`}) <br />.then(console.log());</h6>
                        </div>
                        <button onClick={handleGFP} className='mt-3'>Show Response</button>
                        <div className={`get_filter_product_box ${togglebtn.get_filter_product ? 'show_btn' : 'hide_btn'}`}>
                            <p style={{fontSize:'12px'}}>// category=brand , value=iPhone</p>
                            <h6>{`[`}</h6>
                            <h6 className='ms-3'>{`{`}</h6>
                            <div>
                                <h5>"id": <span>1</span></h5>
                                <h5>"productname": <span>iPhone 14 Pro Max 1TB</span></h5>
                                <h5>"brand": <span>iPhone</span></h5>
                                <h5>"rating": <span>4.5</span></h5>
                                <h5>"category": <span>mobile</span></h5>
                                <h5>"price": <span>189900</span></h5>
                                <h5>"stock": <span>14</span></h5>
                                <h5>"images":{` [`}</h5>
                                <div className='img_link'>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max-Imag 3.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/I-Phone 14 Pro Max image 2.webp"</span></h5>
                                </div>
                                <h5>{`]`}</h5>
                                <h5>"specification":{` [`}</h5>
                                <div className='specification'>
                                    {
                                        <>
                                            <h6>"rom": <span>"1 TB ROM\"</span></h6>
                                            <h6>"display": <span>"17.02 cm (6.7 inch) Super Retina XDR Display"</span></h6>
                                            <h6>"camera": <span>"48MP + 12MP + 12MP + 12MP | 12MP Front Camera"</span></h6>
                                            <h6>"processor": <span>"A16 Bionic Chip, 6 Core Processor Processor"</span></h6></>
                                    }

                                </div>
                                <h5>{`]`}</h5>
                            </div>
                            <h6 className='ms-3'>{`},`}</h6>
                            <span className='ms-3'>{`upto 8 products.. `}</span>
                            <h6>{`]`}</h6>
                        </div>
                    </div>
                    <hr />
                    <div className='get_filter_product_min_max mb-4' id='gfpmm'>
                        <h4>Filter Products by Max & Min Price</h4>
                        <p className='p'>// Optional you can use more max_price or min_price or both</p>
                        <div className='test_box'>
                            <h6>fetch(<code>'https://product-api-ahxv.onrender.com/product/search?max_price=100000&min_price=40000'</code>) <br />.then({`res => res.json()`}) <br />.then(console.log());</h6>
                        </div>
                        <button onClick={handleGFPMM} className='mt-3'>Show Response</button>
                        <div className={`get_filter_product_min_max_box ${togglebtn.get_filter_product_min_max ? 'show_btn' : 'hide_btn'}`}>
                            <h6>{`[`}</h6>
                            <h6 className='ms-3'>{`{`}</h6>
                            <div>
                                <h5>"id": <span>10</span></h5>
                                <h5>"productname": <span>iPhone 14 Pro Max 1TB</span></h5>
                                <h5>"brand": <span>iPhone</span></h5>
                                <h5>"rating": <span>4.5</span></h5>
                                <h5>"category": <span>mobile</span></h5>
                                <h5>"price": <span>189900</span></h5>
                                <h5>"stock": <span>14</span></h5>
                                <h5>"images":{` [`}</h5>
                                <div className='img_link'>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max-Imag 3.webp"</span></h5>
                                    <h5><span>"https://product-api-ahxv.onrender.com/product/I-Phone 14 Pro Max image 2.webp"</span></h5>
                                </div>
                                <h5>{`]`}</h5>
                                <h5>"specification":{` [`}</h5>
                                <div className='specification'>
                                    {
                                        <>
                                            <h6>"rom": <span>"1 TB ROM\"</span></h6>
                                            <h6>"display": <span>"17.02 cm (6.7 inch) Super Retina XDR Display"</span></h6>
                                            <h6>"camera": <span>"48MP + 12MP + 12MP + 12MP | 12MP Front Camera"</span></h6>
                                            <h6>"processor": <span>"A16 Bionic Chip, 6 Core Processor Processor"</span></h6></>
                                    }

                                </div>
                                <h5>{`]`}</h5>
                            </div>
                            <h6 className='ms-3'>{`},`}</h6>
                            <span className='ms-3'>{`upto 8 products.. `}</span>
                            <h6>{`]`}</h6>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Product