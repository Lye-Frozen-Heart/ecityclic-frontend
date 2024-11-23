import { Card } from "antd";
import { useSpring, animated } from "@react-spring/web"; // Para animaciones

const { Meta } = Card;

const AnimatedCard = ({ title, description, image }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 }, // Controla la suavidad de la animación
  });

  return (
    <animated.div style={springProps}>
      <Card
        hoverable
        style={{
          width: 300,
          margin: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </animated.div>
  );
};

export default AnimatedCard;
