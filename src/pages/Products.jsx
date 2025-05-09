import { useCart } from "../context/CartContext";
import PlantCard from "../components/PlantCard";

const plants = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 25,
    image: "/plant1.jpg",
    category: "Large",
    description: "With its large, glossy leaves."
  }, 
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "/plant2.jpg",
    category: "Medium",
    description: "Tough and stylish, it purifies the air."
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "/plant3.jpg",
    category: "Flowering",
    description: "Elegant white flowers bring a fresh vibe to home."
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 12,
    image: "/plant4.jpg",
    category: "Hanging",
    description: "Easy to care for with arching leaves."
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 10,
    image: "/plant5.jpg",
    category: "Succulent",
    description: "A decorative and medicinal plant."
  },
  {
    id: 6,
    name: "Pothos",
    price: 14,
    image: "/plant6.avif",
    category: "Vine",
    description: "Fast-growing and vibrant."
  },
  {
    id: 7,
    name: "Rose",
    price: 19,
    image: "/plant7.jpg",
    category: "Large",
    description: "A timeless classic, roses bring romance."
  },
  {
    id: 8,
    name: "Cactus",
    price: 22,
    image: "/plant8.jpg",
    category: "Medium",
    description: "Perfect for adding style without the hassle."
  },
  {
    id: 9,
    name: "Lotus",
    price: 32,
    image: "/plant9.jpg",
    category: "Hanging",
    description: "The lotus adds a peaceful, zen atmosphere."
  }
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}