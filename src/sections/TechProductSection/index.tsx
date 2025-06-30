import React, { useState, useMemo } from "react";
import Image from "next/image";
import { products } from "./data-products";
import { Heading } from "@/src/components/Heading";
import CustomDropdown from "./CustomDropdown";
import PaginationControls from "./PaginationControls";
import SortByButtons from "./SortByButtons";
import Icon from "@/src/components/Icon/Icon";
import classNames from "classnames";
import { useAmount } from "@/context/AmountContext";
import { ToastSuccess } from "@/src/utils/helpers";

const categories = [
  "All Products",
  "Gaming",
  "Audio",
  "Smart Home",
  "Monitors & TV",
];

interface Product {
  name: string;
  category: string;
  points: number;
  image: string;
}


const sortOptions = ["Most Recent", "Lowest Price", "Highest Price"];
const ITEMS_PER_PAGE = 8;

const uniqueCategories = [
  "All Products",
  ...Array.from(new Set(products.map(p => p.category))),
];


const TechProductSection: React.FC = () => {
  const { activeAmount, setActiveAmount } = useAmount();

  const [filter, setFilter] = useState("All Products");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [page, setPage] = useState(1);
  const [processingIndex, setProcessingIndex] = useState<number | null>(null);

const [redeemedItems, setRedeemedItems] = useState<Product[]>([]);

  const filteredProducts = useMemo(() => {
    return filter === "All Products"
      ? products
      : products.filter((p) => p.category === filter);
  }, [filter]);

  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];
    if (sortBy === "Lowest Price") items.sort((a, b) => a.points - b.points);
    if (sortBy === "Highest Price") items.sort((a, b) => b.points - a.points);
    return items;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts?.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleRedeem = (product: Product, index: number) => {
    setProcessingIndex(index);
    setActiveAmount((prev) => prev - product.points);
    setRedeemedItems((prev) => [...prev, product]);
    console.log("Redeemed items:", [...redeemedItems, product]);
    ToastSuccess(`${product?.name} added to your rewards! 🎉`);
    setTimeout(() => setProcessingIndex(null), 3000);
  };

  return (
    <section className="w-full bg-white py-20 md:py-[160px] max-w-[1496px] mx-auto px-4 ">
      <div className="w-full flex flex-col gap-10 mb-16">
        <Heading type="h2" className="!font-black">
          <span className="bg-textGradient mr-2 bg-clip-text text-transparent">
            Tech
          </span>
          Products
        </Heading>

        <div className="w-full flex items-start  justify-between">
          <div className="w-full flex flex-wrap gap-10 items-start">
            <div className="w-full md:w-fit flex items-center gap-3 whitespace-nowrap pr-8 border-r border-gray-200">
              <p className="w-fit body hidden md:block">Filter by:</p>
              <CustomDropdown
                options={categories}
                value={filter}
                onChange={(newFilter) => {
                  setFilter(newFilter);
                  setPage(1);
                }}
              />
            </div>
            <SortByButtons
              options={sortOptions}
              selected={sortBy}
              onChange={(option) => setSortBy(option)}
            />
          </div>

          <div className="w-fit hidden md:block">
            <PaginationControls
              page={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
            />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts?.map((product, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <div className="w-full border  border-[#DAE4F2] rounded-t-lg aspect-square overflow-hidden max-h-[320px] flex items-center justify-center">
              <Image
                src={product?.image}
                alt={product?.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="w-full border-l py-4 px-6 border-r border-b border-[#DAE4F2] rounded-b-lg flex flex-col text-left">
              <h3 className="body  text-black font-semibold">
                {product?.name}
              </h3>
              <p className="body">{product?.category}</p>
            </div>
            <button
              className={classNames(
                "w-full mt-4 flex items-center whitespace-nowrap justify-center gap-2 text-base font-Montserrat border-none outline-none font-semibold px-10 py-3 rounded-xl shadow-custom-sm transition-transform duration-300",
                activeAmount < product?.points
                  ? "bg-[#E6EDF7] text-[#7C899C] cursor-not-allowed"
                  : "text-white bg-custom-gradient"
              )}
              disabled={
                processingIndex === index || activeAmount < product?.points
              }
              onClick={() => handleRedeem(product, index)}
            >
              {processingIndex === index ? (
                "Processing..."
              ) : activeAmount < product?.points ? (
                <>
                  You need
                  <Icon icon="Icons-2" width={24} height={24} />
                  {product?.points}
                </>
              ) : (
                <>
                  Redeem for
                  <Icon icon="aerocard-icon" width={24} height={24} />
                  {product?.points}
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-20">
        <p className="w-full body text-center lg:pl-56">
          <span className="bg-textGradient bg-clip-text text-transparent mr-1">
            {ITEMS_PER_PAGE} of {products?.length}
          </span>
          products
        </p>
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </section>
  );
};

export default TechProductSection;
