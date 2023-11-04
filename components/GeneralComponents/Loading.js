const Loading = () => {
    return (
        <div className="fixed top-0 right-0 left-0 bg-[#fffffff0] h-[100vh] w-full overflow-hidden z-[500]">
            <div className="container z-30 ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <p className="fixed top-[60%] text-center text-[1.75rem] text-[#3b2674] w-full font-[Bhoma]">... لطفا منتظر بمانید</p> */}
        </div>
    )
}
export default Loading;