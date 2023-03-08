import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "100vw" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{ textAlign: "center" }}>
            {({ isActive }) => (
              <div
                style={{transition: '0.05s', width: isActive ? "200px" : '100px', height: isActive ? "200px" : '100px', background: "green" }}
              >Slider 1</div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <div
                style={{ transition: '0.05s', width: isActive ? "200px" : '100px', height: isActive ? "200px" : '100px', background: "green" }}
              >Slider 2</div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                style={{ transition: '0.05s', width: isActive ? "200px" : '100px', height: isActive ? "200px" : '100px', background: "green" }}
              >Slider 3</div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                style={{ transition: '0.05s', width: isActive ? "200px" : '100px', height: isActive ? "200px" : '100px', background: "green" }}
              >Slider 4</div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <div
                style={{ transition: '0.05s', width: isActive ? "200px" : '100px', height: isActive ? "200px" : '100px', background: "green" }}
              >Slider 5</div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
