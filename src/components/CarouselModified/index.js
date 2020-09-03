import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselCard from "../CarouselCard";
import "react-responsive-carousel/lib/styles/carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

function findNumOfCards(width) {
  let numOfCards = 0;

  if (width <= 575) {
    numOfCards = 1;
  } else if (width <= 767) {
    numOfCards = 2;
  } else if (width <= 991) {
    numOfCards = 3;
  } else {
    numOfCards = 4;
  }
  return numOfCards;
}

const CarouselModified = (props) => {
  const [width, setWidth] = useState(window.outerWidth);
  let numOfCards = findNumOfCards(width);

  window.addEventListener("resize", () => {
    setWidth(window.outerWidth);
  });

  const data = props.data;
  let categroisedData = [];

  for (let i = 0; i < Math.ceil(data.length / numOfCards); i++) {
    let slidesData = [];
    for (let j = 0; j < numOfCards; j++) {
      slidesData.push(data[i * numOfCards + j]);
    }
    categroisedData.push(slidesData);
  }

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
  });

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    background: "#fff",
    color: "#000000",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
    color: "#fff",
  };

  return (
    <>
      <Carousel
        {...getConfigurableProps()}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <NavigateBeforeOutlinedIcon />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <NavigateNextOutlinedIcon />
            </button>
          )
        }
      >
        {categroisedData.map((groupedItem, index) => {
          return (
            <div className="row carousel-slider" key={index}>
              <div className="col-11 mx-auto">
                <div className="row mx-auto">
                  {groupedItem.map((item) => {
                    return (
                      <div
                        className="col-xs-10 col-sm-6 col-md-4 col-lg-3 "
                        key={item.id}
                      >
                        <CarouselCard />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselModified;
