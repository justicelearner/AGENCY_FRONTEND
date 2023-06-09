import React from "react";
import style from "./Carousel.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectFigure from "../ProjectFigure/ProjectFigure";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`${style.container} ${style.onLarge}`}>
        <Slider {...settings}>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/ZgTPK6r/my-Fashion.png"}
                  title={"my fashion"}
                  src={
                    "https://media.istockphoto.com/id/1031313462/photo/woman-reading-emagazine-on-tablet-all-contents-are-made-up.jpg?s=612x612&w=0&k=20&c=ZGgbEF4dCQ3XGBpf97M3TPBQyMtXwSbU3-0_8E1LKJc="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/R61sjQ9/mightyN.png"}
                  title={"mighty networks"}
                  src={
                    "https://media.istockphoto.com/id/1130134916/photo/businessman-videoconferencing-with-her-colleagues-on-tablet.jpg?s=612x612&w=0&k=20&c=ZKkfd-gTAfCtfN8-wF3Sv1e_23VcUCmY0jm7WsNclKI="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/GTSbtR1/wCalm.png"}
                  title={"calm"}
                  src={
                    "https://media.istockphoto.com/id/1130134919/photo/businessman-analyzing-data-on-tablet.jpg?s=612x612&w=0&k=20&c=9MvKpVL0Ari5_1oy-6yfLSShngxflIHdSH6vKLiDjAc="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/vLThpsf/waqua.png"}
                  title={"aguabyte"}
                  src={
                    "https://media.istockphoto.com/id/488474194/photo/illustration-of-financial-graph-on-a-digital-tablet-in-office.jpg?s=612x612&w=0&k=20&c=Oz-HJMy2yuwmjLuohds_8Hmg6I6gLlNMwdB8KrwsIYo="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/qCKRtts/food52.png"}
                  title={"food52"}
                  src={
                    "https://media.istockphoto.com/id/927659850/photo/man-hands-holding-credit-card-and-laptop-with-food-delivery.jpg?s=612x612&w=0&k=20&c=ZWw_K5Vdw6DqNKyHJ_IK0lbWl5uiHptwvFamfd_BJ-U="
                  }
                />
        </div>

        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/QnqJ7mk/ball.png"}
                  title={"boll $ branch"}
                  src={
                    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                  }
                />
        </div>
      </Slider>
      
    </div>
  );
}


export function MiniCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`${style.container} ${style.onMobile}`}>
       <Slider {...settings}>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/ZgTPK6r/my-Fashion.png"}
                  title={"my fashion"}
                  src={
                    "https://media.istockphoto.com/id/1031313462/photo/woman-reading-emagazine-on-tablet-all-contents-are-made-up.jpg?s=612x612&w=0&k=20&c=ZGgbEF4dCQ3XGBpf97M3TPBQyMtXwSbU3-0_8E1LKJc="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/R61sjQ9/mightyN.png"}
                  title={"mighty networks"}
                  src={
                    "https://media.istockphoto.com/id/1130134916/photo/businessman-videoconferencing-with-her-colleagues-on-tablet.jpg?s=612x612&w=0&k=20&c=ZKkfd-gTAfCtfN8-wF3Sv1e_23VcUCmY0jm7WsNclKI="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/GTSbtR1/wCalm.png"}
                  title={"calm"}
                  src={
                    "https://media.istockphoto.com/id/1130134919/photo/businessman-analyzing-data-on-tablet.jpg?s=612x612&w=0&k=20&c=9MvKpVL0Ari5_1oy-6yfLSShngxflIHdSH6vKLiDjAc="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/vLThpsf/waqua.png"}
                  title={"aguabyte"}
                  src={
                    "https://media.istockphoto.com/id/488474194/photo/illustration-of-financial-graph-on-a-digital-tablet-in-office.jpg?s=612x612&w=0&k=20&c=Oz-HJMy2yuwmjLuohds_8Hmg6I6gLlNMwdB8KrwsIYo="
                  }
                />
        </div>
        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/qCKRtts/food52.png"}
                  title={"food52"}
                  src={
                    "https://media.istockphoto.com/id/927659850/photo/man-hands-holding-credit-card-and-laptop-with-food-delivery.jpg?s=612x612&w=0&k=20&c=ZWw_K5Vdw6DqNKyHJ_IK0lbWl5uiHptwvFamfd_BJ-U="
                  }
                />
        </div>

        <div className={`${style.miniCont}`}>
        <ProjectFigure
                  logo={"https://i.ibb.co/QnqJ7mk/ball.png"}
                  title={"boll $ branch"}
                  src={
                    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                  }
                />
        </div>
      </Slider>
    </div>
  );
}


export default Carousel;
