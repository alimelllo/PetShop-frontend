import Header from "../../components/GeneralComponents/Header.js";
import { useEffect, useState } from "react";
import LoadingProductCard from "../../components/GeneralComponents/LoadingProductCard.js";
import { skeleton } from "../../components/Main/Main.js";
import productService from "../../Services/ProductsServices/product.service";
import ProductCard from "../../components/GeneralComponents/ProductCard";

const Products = (props) => {
  const [loadingProducts, SetLoadingProducts] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [productList, SetProductList] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const [productGroups, SetProductGroups] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(<LoadingProductCard />);
    }
    SetLoadingProducts(arr);
  }, []);

  useEffect(() => {
    try {
      productService.getAllProductGroups().then((result) => {
        console.log(result);
        
        const list = result.data.map((item) => (
          <div className="my-5 flex flex-row justify-end">
            <p className="text-right font-[bhoma] text-[1rem] text-[gray] mr-5 ">
              {item.title}
            </p>
            <input className="mr-5" type={"checkbox"}/>
          </div>
        ));
        SetProductGroups(list);
      });
    } catch (err) {}
  }, []);

  const getAllProducts = async (searchText) => {
    SetIsLoading(true);
    try {
      const result = await productService.getAllProducts(
        searchText ? searchText : ""
      );
      const list = result.data.map((item) => (
        <ProductCard
          imageWidth={130}
          imageHeight={130}
          name={item.name}
          price={item.price}
          productImage={item.productImage}
          description={item.description}
          weight={item.weight}
          width={"w-[18%] md:w-[45%]"}
        />
      ));
      SetProductList(list);
      SetIsLoading(false);
    } catch (err) {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    const list = props.data.map((item) => (
      <ProductCard
        imageWidth={130}
        imageHeight={130}
        name={item.name}
        price={item.price}
        productImage={item.productImage}
        description={item.description}
        weight={item.weight}
        width={"w-[18%] md:w-[45%]"}
      />
    ));
    console.log(props.data)
    SetProductList(list);
  }, []);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      getAllProducts(searchText);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row  mt-[3rem]">
        <div className="PRODUCTS_CONTAINER w-full mt-[1rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap h-[100%]">
          <div className="bg-[#e8e8e861] shadow-2xl pr-5 flex flex-row justify-end items-center w-full pt-4 py-3 mx-auto mt-[1rem]">
            <button
              onClick={() => getAllProducts(searchText)}
              className="mr-5 bg-[#537df9f4] rounded-[15px] font-[Bhoma] px-5 h-[3rem] text-white flex justify-center items-center transition-all duration-200 hover:bg-[#535ef9f4] shadow-2xl "
            >
              جستجو
            </button>
            <input
              onKeyUp={(e) => handleEnterPress(e)}
              onChange={(e) => SetSearchText(e.target.value)}
              className="w-8/12 h-[3rem] outline-none font-[monospace] text-[1rem] rounded-[15px] placeholder:font-[Bhoma] text-right pr-5 shadow-md mr-8 bg-[#b2b2b242]"
              placeholder="... محصول مورد نظر را جستجو کنید"
            />
          </div>
          {isLoading && loadingProducts}
          {!isLoading && (
            <div className=" w-full flex flex-row flex-wrap justify-around">
              {productList}
            </div>
          )}
        </div>
        <div className="FILTER_CONTAINER bg-white w-2/12 shadow-2xl h-screen">
          <p className="text-right pr-10 font-[bhoma] text-[1.3rem] text-[gray] mt-[3rem] py-3 pb-4 shadow-xl">
            فیلتر
          </p>
          {productGroups}
        </div>
      </div>
    </div>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const result = await productService.getAllProducts("" , "");
  return {
    props: {
      data: result.data,
    },
  };
}
