import Header from "../../components/GeneralComponents/Header.js";
import { useEffect, useState } from "react";
import LoadingProductCard from "../../components/GeneralComponents/LoadingProductCard.js";
import { skeleton } from "../../components/Main/Main.js";
import productService from "../../Services/ProductsServices/product.service";
import ProductCard from "../../components/GeneralComponents/ProductCard";
import MobileFilterDropDown from "../../components/Products/MobileFilterDropDown.js";
import Skeleton from 'react-loading-skeleton'
import { ordersHandler } from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
import { useDispatch, useSelector } from "react-redux";

const Products = (props) => {

  const selectOrderState = useSelector(ordersHandler);
  const ordersState = selectOrderState.payload.ProfileSettings.orders;
  const AddOrdersHandler = useDispatch();

  const [loadingProducts, SetLoadingProducts] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [categoyIsLoading, SetCategoryIsLoading] = useState(false);

  const [categoryName, SetCategoryName] = useState("");
  const [productList, SetProductList] = useState([]);
  const [searchText, SetSearchText] = useState("");

  const [productGroups, SetProductGroups] = useState([]);
  const [productGroupsData, SetProductGroupsData] = useState([]);

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
          onClick={() => addOrderHandler(item)}
        />
      ));
      SetProductList(list);
      SetIsLoading(false);
    } catch (err) {
      SetIsLoading(false);
    }
  };

  useEffect(() => {
    SetCategoryIsLoading(true);
    try {
      productService.getAllProductGroups().then((result) => {

        result.data.unshift({ title: 'نمایش همه ', categoryName: null });
        SetProductGroupsData(result.data);

        const list = result.data.map((item) => (
          <div className="flex flex-row justify-end w-10/12 mx-auto my-2 border-b-[1px] border-b-solid border-b-[#d4d4d4] pb-4 font-[bhoma] text-[#979797]">
            <label className="mr-5 text-[1.25rem]" >{item.title}</label>
            <input type="radio" onChange={(e) => { e.target.checked ? SetCategoryName(item.categoryName) : null; SetSearchText(''); SetPageNumber(1); }} value={item.categoryName} name="productGroup" />
          </div>
        ));
        SetProductGroups(list);
        SetCategoryIsLoading(false);
      });
    } catch (err) {
      SetCategoryIsLoading(false);
    }
  }, []);
  
  const addOrderHandler = ( order ) => {

    const arr = [...ordersState];

    arr.push(order);
    AddOrdersHandler( ordersHandler({type : 'ADD' , payload : order}));
  }
  
  
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
        onClick={() => addOrderHandler(item)}
      />
    ));
    SetProductList(list);
  }, []);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      getAllProducts(searchText, categoryName, 1);
      SetPageNumber(1);
    }
  };

  useEffect(() => {
    if (pageNumber) {
      getAllProducts("", categoryName, pageNumber);
    }
  }, [pageNumber, categoryName])


  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row mt-[3rem]">
        <div className="PRODUCTS_CONTAINER w-10/12 md:w-full md:pl-0 mt-[1rem] pl-5 border-r-[3px] border-r-[solid] border-r-[#f7f7f7] flex flex-row flex-wrap">
          <div className="bg-[#e8e8e861] shadow-2xl pr-5 flex flex-row justify-end md:justify-around items-center w-full py-2 mx-auto mt-[1.5rem] md:mt-[0.5rem] ">
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
              <MobileFilterDropDown service={getAllProducts} productGroups={productGroupsData} />
            </aside>
          </div>

          {isLoading && loadingProducts}

          {!isLoading && (
            <>
              <div className=" w-full flex flex-row flex-wrap justify-around">
                {productList}
              </div>
              {productList.length > 0 && <div className="w-2/12 md:w-6/12 flex flex-row justify-around mx-auto my-5">
                <button disabled={!pageNumber || pageNumber === 1 ? true : false} onClick={() => SetPageNumber(pageNumber - 1)} className={`${!pageNumber || pageNumber === 1 ? "opacity-[0.5] hover:none" : "hover:bg-[#6487f0f4] hover:text-white cursor-pointer"} pb-1 px-2 rounded-[10px] shadow-xl font-[700] border-[#6487f0f4] border-solid border-[1px]  transition-all duration-200  text-[#6487f0f4]`}>{"<<"}</button>
                <p className="p-2 px-4 rounded-[10px] shadow-xl bg-[#395cc7f4]  font-[700] transition-all duration-200 text-white">{pageNumber ? pageNumber : 1}</p>
                <button disabled={productList.length < 10 ? true : false} onClick={() => { pageNumber ? SetPageNumber(pageNumber + 1) : SetPageNumber(2) }} className={` ${productList.length < 10 ? "opacity-[0.5] hover:none" : "hover:bg-[#6487f0f4] hover:text-white cursor-pointer"}  pb-1 px-2 rounded-[10px] shadow-xl  font-[700]  border-[#6487f0f4] border-solid border-[1px]  transition-all duration-200 text-[#6487f0f4]`}>{">>"}</button>
              </div>}
              {productList.length === 0 &&
                <div className="mx-auto mt-[10rem] font-[bhoma] text-[2rem] text-[#a5a5a5]">
                  <p className="">هیچ موردی یافت نشد</p>
                </div>}
            </>
          )}
        </div>

        <aside className="FILTER_CONTAINER md:hidden w-2/12 shadow-2xl fixed right-0 h-screen ">
          <p className="text-right pr-10 font-[bhoma] text-[1.3rem] text-[gray] py-3 mt-[3rem] shadow-xl">
            فیلتر
          </p>
          {!categoyIsLoading && <div className="flex flex-col mt-5">
            {productGroups}
          </div>}
          {categoyIsLoading &&
            <>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
              <div className='w-[80%] mx-auto   my-8'>
                <Skeleton count={1} baseColor='#e1dfdff4' height={'1.5rem'} highlightColor='white' />
              </div>
            </>}
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
