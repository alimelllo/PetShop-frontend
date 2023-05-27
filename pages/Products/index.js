import Header from '../../components/GeneralComponents/Header.js';

const Products = () => {


    return (
        <div>
        <Header />
          <div className='flex flex-row  mt-[3rem]'>

             <div className='PRODUCTS_CONTAINER w-10/12 h-screen border-r-[3px] border-r-[solid] border-r-[#f7f7f7]'>
                products
             </div>
             <div className='FILTER_CONTAINER w-2/12 shadow-2xl'>
                nav bar
             </div>

          </div>
        </div>
    )
}

export default Products;