import Header from "../../components/GeneralComponents/Header.js";
import { useEffect, useState } from "react";
import LoadingProductCard from "../../components/GeneralComponents/LoadingProductCard.js";
import { skeleton } from "../../components/Main/Main.js";
import productService from "../../Services/ProductsServices/product.service";
import ProductCard from "../../components/GeneralComponents/ProductCard";
import MobileFilterDropDown from "../../components/Products/MobileFilterDropDown.js";

const Products = (props) => {
  
  const [loadingProducts, SetLoadingProducts] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [productList, SetProductList] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const [productGroups, SetProductGroups] = useState([]);
  const [pageNumber, SetPageNumber] = useState(undefined);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(<LoadingProductCard />);
    }
    SetLoadingProducts(arr);
  }, []);



  const getAllProducts = async (searchText, productGroup, pageNumber) => {
    SetIsLoading(true);
    try {
      const result = await productService.getAllProducts(
        searchText ? searchText : "", productGroup, pageNumber
      );
      const list = result.data.map((item) => (
        <ProductCard
          id={item.id}
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
    try {
      productService.getAllProductGroups().then((result) => {
        const list = result.data.map((item, i) => (
          <div className="flex flex-row justify-end w-10/12 mx-auto my-2 font-[bhoma] text-[#505050]">
            <label className="mr-5" >{item.title}</label>
            <input type="radio" onChange={(e) => { e.target.checked ? getAllProducts("", item.categoryName, 1) : null; SetSearchText(''); }} value={item.categoryName} name="productGroup" />
          </div>
        ));
        SetProductGroups(list);
      });
    } catch (err) { }
  }, []);

  useEffect(() => {
    const list = props.data.map((item) => (
      <ProductCard
        id={item.id}
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

  useEffect(() => {
    if (pageNumber) {
      console.log(pageNumber);
      getAllProducts("", "", pageNumber);
    }
  }, [pageNumber])


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row mt-[3rem]">
        <div className="PRODUCTS_CONTAINER w-10/12 md:w-full md:pl-0 mt-[1rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap">
          <div className="bg-[#e8e8e861] shadow-2xl pr-5 flex flex-row justify-end md:justify-around items-center w-full pt-1 pb-2 mx-auto mt-[1rem]">
            <button
              onClick={() => getAllProducts(searchText)}
              className="mr-5 md:mr-0 bg-[#537df9f4] rounded-[15px] font-[Bhoma] px-5 h-[3rem] text-white flex justify-center items-center transition-all duration-200 hover:bg-[#535ef9f4] shadow-2xl "
            >
              جستجو
            </button>
            <input
              onKeyUp={(e) => handleEnterPress(e)}
              onChange={(e) => SetSearchText(e.target.value)}
              className="w-8/12 md:w-7/12 h-[3rem] outline-none md:placeholder:px-3 font-[monospace] text-[1rem] rounded-[15px] placeholder:font-[Bhoma] text-right pr-5 shadow-md mr-8 md:mr-0 bg-[#b2b2b242]"
              placeholder="... محصول مورد نظر را جستجو کنید"
            />
            <aside className="hidden md:flex w-1/12 justify-center">
              <MobileFilterDropDown/>
            </aside>
          </div>
          {isLoading && loadingProducts}
          {!isLoading && (
            <>
              <div className=" w-full flex flex-row flex-wrap justify-around">
                {productList}
              </div>
              <div className="w-2/12 md:w-6/12 flex flex-row justify-around mx-auto my-5">
                <button disabled={!pageNumber || pageNumber === 1 ? true : false} onClick={() => SetPageNumber(pageNumber - 1)} className={`${!pageNumber || pageNumber === 1 ? "opacity-[0.5] hover:none" : "hover:bg-[#6487f0f4] hover:text-white"} pb-1 px-2 rounded-[10px] shadow-xl font-[700] border-[#6487f0f4] border-solid border-[1px]  transition-all duration-200 cursor-pointer text-[#6487f0f4]`}>{"<<"}</button>
                <p className="p-2 px-4 rounded-[10px] shadow-xl bg-[#395cc7f4]  font-[700] transition-all duration-200 text-white">{pageNumber ? pageNumber : 1}</p>
                <button disabled={productList.length < 10 ? true : false} onClick={() => { pageNumber ? SetPageNumber(pageNumber + 1) : SetPageNumber(2) }} className={` ${productList.length < 10 ? "opacity-[0.5] hover:none" : "hover:bg-[#6487f0f4] hover:text-white"}  pb-1 px-2 rounded-[10px] shadow-xl  font-[700]  border-[#6487f0f4] border-solid border-[1px]  transition-all duration-200 cursor-pointer text-[#6487f0f4]`}>{">>"}</button>
              </div>
            </>
          )}
        </div>
        <aside className="FILTER_CONTAINER md:hidden w-2/12 shadow-2xl fixed right-0 h-screen ">
          <p className="text-right pr-10 font-[bhoma] text-[1.3rem] text-[gray] py-3 mt-[2rem] shadow-xl">
            فیلتر
          </p>
          <div className="flex flex-col mt-5">
            {productGroups}
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const result = await productService.getAllProducts("", "", 1);
  return {
    props: {
      data: result.data,
    },
  };
}
