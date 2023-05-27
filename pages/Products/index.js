import Header from '../../components/GeneralComponents/Header.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Products = () => {


    return (
        <div>
        <Header />
          <div className='flex flex-row  mt-[3rem]'>

             <div className='PRODUCTS_CONTAINER w-10/12 h-screen   border-r-[3px] border-r-[solid] border-r-[#f7f7f7]'>
                <Skeleton baseColor='#cbcbcb' className='shadow-2xl mt-[5rem]' containerClassName='flex flex-row justify-around flex-wrap' width={200} highlightColor='white' count={10} height={280}/>
             </div>
             <div className='FILTER_CONTAINER w-2/12 shadow-2xl'>
                nav bar
             </div>

          </div>
        </div>
    )
}

export default Products;