import React from 'react'
import styles from "./Products.module.css"
import ProductCard from '../../Components/ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function Products() {
    return (
        <section className={styles.Product_Main}>
            <div className={styles.Product_wrapper}>
                <h2 className={styles.Product_Title}>OUR PRODUCT & services</h2>
                <div className={styles.Product_slider}>
                    <Swiper
                        style={{ padding: "50px 0 100px 0" }}
                        slidesPerView={1}
                        spaceBetween={50}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            425: {
                                slidesPerView: 2,
                                spaceBetween: 200,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 150,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 200,
                            },
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className={styles.Product_slider}>
                    <Swiper
                        style={{ padding: " 50px 0 100px 0" }}
                        slidesPerView={1}
                        spaceBetween={50}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            425: {
                                slidesPerView: 2,
                                spaceBetween: 200,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 150,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 200,
                            },
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                img={`https://cdn.shopify.com/s/files/1/0156/6146/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_1920x.jpg?v=1704288380`}
                                href={"/products/1"}
                                alt={"legacy T-shirt"}
                                ProductName={`Legacy T-Shirt`}
                                ProductSize={`slim fit`}
                                ProductColor={`Black`}
                                ProductPrice={`us$28`}
                                ProductRating={4.2}
                                ProductDiscountedPrice={`us$25`}
                                offer={`20%`} />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )
}
