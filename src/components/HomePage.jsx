import React, { Fragment, useCallback, useEffect, useState } from 'react'
import '../style/homepage.css'

function HomePage() {

    const [productdata, setProductData] = useState([]);
    const [getData, setGetData] = useState({
        "id": 1,
        "productname": "iPhone 14 Pro Max 1TB",
        "brand": "iPhone",
        "rating": "4.5",
        "category": "mobile",
        "price": 189900,
        "stock": 14,
        "images": [
            "https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max.webp",
            "https://product-api-ahxv.onrender.com/product/apple-iphone-14-pro-Max-Imag 3.webp",
            "https://product-api-ahxv.onrender.com/product/I-Phone 14 Pro Max image 2.webp"
        ],
        "specification": {
            "rom": "1 TB ROM\"",
            "display": "17.02 cm (6.7 inch) Super Retina XDR Display",
            "camera": "48MP + 12MP + 12MP + 12MP | 12MP Front Camera",
            "processor": "A16 Bionic Chip, 6 Core Processor Processor"
        }
    },);

    const getProductData = async () => {
        let data = await fetch('https://product-api-ahxv.onrender.com/products');
        data = await data.json();
        setProductData(data);
    }



    useEffect(() => {
        let timer;
        timer = setInterval(() => {
            setGetData(productdata[Math.floor(Math.random() * 34)])
        }, 3000)
        return () => clearInterval(timer)
    }, [getData])




    useEffect(() => {
        getProductData();
    }, [])

    return (
        <Fragment>
            <div className='homepage'>
                <div className='main_content'>
                    <div className="row">
                        <div className="col-6">
                            <div className='content_text text-center'>
                                <h1>Dummy<span>JSON</span></h1>
                                <h5>Get dummy/fake JSON data to use as placeholder in development or in prototype testing.</h5>
                                <div className='content_btn'>
                                    <button className='' type='btn'>View on Github</button>
                                    <button className='' type='btn'>Read Docs</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 pe-5">
                            <div className='content_box'>
                                <h6>{`{`}</h6>
                                {
                                    getData ? <div>
                                        <h5>"id": <span>{getData.id}</span></h5>
                                        <h5>"productname": <span>{getData.productname}</span></h5>
                                        <h5>"brand": <span>{getData.brand}</span></h5>
                                        <h5>"rating": <span>{getData.rating}</span></h5>
                                        <h5>"category": <span>{getData.category}</span></h5>
                                        <h5>"price": <span>{getData.price}</span></h5>
                                        <h5>"stock": <span>{getData.stock}</span></h5>
                                        <h5>"images":{` [`}</h5>
                                        <div className='img_link'>
                                            <h5>{getData.images && <span>{`"${getData.images[0]}"`}</span>}</h5>
                                            <h5>{getData.images && <span>{`"${getData.images[1]}"`}</span>}</h5>
                                            <h5>{getData.images && <span>{`"${getData.images[2]}"`}</span>}</h5>
                                        </div>
                                        <h5>{`]`}</h5>
                                        <h5>"specification":{` [`}</h5>
                                        <div className='specification'>
                                            {
                                                getData.specification && <>
                                                    <h6>"rom": <span>{getData.specification.rom}</span></h6>
                                                    <h6>"display": <span>{getData.specification.display}</span></h6>
                                                    <h6>"camera": <span>{getData.specification.camera}</span></h6>
                                                    <h6>"processor": <span>{getData.specification.processor}</span></h6></>
                                            }

                                        </div>
                                        <h5>{`]`}</h5>
                                    </div>
                                        :
                                        <>
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
                                        </>
                                }
                                <h6>{`}`}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default HomePage