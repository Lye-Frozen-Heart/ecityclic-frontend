import { Skeleton } from "antd";
import { AnimatedCard } from "../index";
import "./CardsContainer.css";
const CardsContainer = ({ data }) => {
  return (
    <div className="card-container-main">
      {data?.length === 0 || data === null
        ? Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: 300,
              }}
              className="cards-map"
            >
              <Skeleton
                active
                avatar={false}
                paragraph={{ rows: 3 }}
                style={{ width: "100%", height: "150px" }}
              />
            </div>
          ))
        : data?.map((item, index) => (
            <AnimatedCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
    </div>
  );
};

export default CardsContainer;
