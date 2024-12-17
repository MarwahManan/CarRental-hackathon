import Image from "next/image";
import Link from "next/link";
import { FaHeart} from "react-icons/fa";  
export default function RecCars() {
  const cars = [
    { id: 1, name: "MG ZX Exclusive", type: "Sport", price: "$72.00/day", image: "/rolls1.png" },
    { id: 2, name: "NEW MG ZS", type: "SUV", price: "$80.00/day", image: "/rolls2.png" },
    { id: 3, name: "MG ZX Excite", type: "SUV", price: "$74.00/day", image: "/rolls1.png" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {cars.map((car) => (
        <div key={car.id} className="border rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <Image src={car.image} alt={car.name} width={200} height={100} className="mx-auto object-contain" />
          <p className="text-lg font-semibold mt-4">{car.price}</p>
          <Link href="/billing"> <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Rent Now</button></Link>
        </div>
      ))}
    </div>
  );
}