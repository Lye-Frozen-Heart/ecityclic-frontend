import { Card } from "antd";
import { useSpring, animated } from "@react-spring/web"; // Para animaciones
import "./AnimatedCard.css";
const { Meta } = Card;

const AnimatedCard = ({ title, description }) => {
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
        }}
        className="card-styles"
      >
        <Meta title={title} description={description} />
      </Card>
    </animated.div>
  );
};

export default AnimatedCard;
