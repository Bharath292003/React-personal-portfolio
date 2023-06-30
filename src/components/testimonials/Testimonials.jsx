import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/person-1.jpg'
import AVTR2 from '../../assets/person-2.jpg'
import AVTR3 from '../../assets/person-3.jpg'
import AVTR4 from '../../assets/person-4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Kevin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam ipsa itaque sequi quos eum voluptatum sunt iusto aperiam eius! Et odio ullam, tempora facere perspiciatis aliquam! Tempore, quidem facere.'
  },
  {
    avatar: AVTR2,
    name: 'Lora',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam ipsa itaque sequi quos eum voluptatum sunt iusto aperiam eius! Et odio ullam, tempora facere perspiciatis aliquam! Tempore, quidem facere.'
  },
  {
    avatar: AVTR3,
    name: 'Albert',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam ipsa itaque sequi quos eum voluptatum sunt iusto aperiam eius! Et odio ullam, tempora facere perspiciatis aliquam! Tempore, quidem facere.'
  },
  {
    avatar: AVTR4,
    name: 'Jessica',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam ipsa itaque sequi quos eum voluptatum sunt iusto aperiam eius! Et odio ullam, tempora facere perspiciatis aliquam! Tempore, quidem facere.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients - Be the first one</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index)=>
          {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}


export default Testimonials