import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount?: number;
  isBestseller?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "High-End Fragrance Collection for Males",
    category: "MEN",
    image: "images/products-main/perfume-1.jpg",
    rating: 4.7,
    reviews: 1221,
    price: 565.0,
    originalPrice: 849.0,
    discount: 34,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Chief Gentleman Deluxe Fragrance - 100mL.",
    category: "MEN",
    image: "images/products-main/perfume-2.jpg",
    rating: 4.8,
    reviews: 736,
    price: 499.0,
    originalPrice: 899.0,
    discount: 45,
    isBestseller: true,
  },
  {
    id: "3",
    name: "Smudge-Proof Fluid Lip Color",
    category: "WOMEN",
    image: "images/products-main/perfume-3.jpg",
    rating: 4.8,
    reviews: 187,
    price: 329.0,
    originalPrice: 449.0,
    isBestseller: true,
    isSale: true,
  },
  {
    id: "4",
    name: "Premium Scent Gift Bundle for Females",
    category: "WOMEN",
    image: "images/products-main/perfume-4.jpg",
    rating: 4.9,
    reviews: 732,
    price: 565.0,
    originalPrice: 849.0,
    discount: 34,
    isBestseller: true,
  },
];

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <Link href="/product" className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-wrap gap-1">
            {product.isBestseller && (
              <span className="rounded bg-[#E1BB7F] px-2 py-1 text-[10px] font-semibold text-white">
                BEST SELLER
              </span>
            )}

            {product.isSale && (
              <span className="rounded bg-[#7EBAFE] px-2 py-1 text-[10px] font-semibold text-white">
                SALE
              </span>
            )}
          </div>

          {product.discount && (
            <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold text-white">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Link href="/product">
            <Button className="w-full rounded-xl bg-black text-white hover:bg-gray-800">
              VIEW PRODUCT
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  heading,
  shop,
}: {
  heading: string;
  shop?: boolean;
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      {!shop && (
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold uppercase tracking-wide sm:text-2xl">
            {heading}
          </h2>
        </div>
      )}

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar sm:hidden">
          {products.map((product) => (
            <div key={product.id} className="w-[240px] shrink-0 snap-center">
              <Card product={product} />
            </div>
          ))}
          <div className="w-2 shrink-0" />
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      {!shop && (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="w-full max-w-xs rounded-xl border-2 border-black py-6 text-sm font-medium"
          >
            VIEW ALL
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductCard;
