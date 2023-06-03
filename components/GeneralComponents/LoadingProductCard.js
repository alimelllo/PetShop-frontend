import Skeleton from 'react-loading-skeleton'


const LoadingProductCard = () => {
    return (
        <div className='w-[18%] flex flex-col justify-around ml-4 h-[20rem] z-20 shadow-2xl my-[1rem]'>
               <div className='w-[90%] mx-auto rounded-[10px] py-5 h-[50%]'>
                  <Skeleton  count={1} height={130} baseColor='#cbcbcb' highlightColor='white' />
               </div>
               <div className='w-[50%] pl-3  rounded-[10px] h-[15%] pt-3 '>
                  <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
               </div>
               <div className='w-[90%] pl-3  rounded-[10px] h-[15%] '>
                  <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
               </div>

               <div className='flex flex-row w-[90%] justify-between  mx-auto'>
                  <div className='w-[40%] pl-1  rounded-[10px] h-[15%] '>
                     <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
                  </div>
                  <div className='w-[20%] pr-1 rounded-[10px] h-[15%] '>
                     <Skeleton count={1} baseColor='#cbcbcb' highlightColor='white' />
                  </div>
               </div>
            </div>
    )
}

export default LoadingProductCard;