import { useSelector } from "react-redux";
import { themeHandler } from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";

const Ticket = ( props ) => {

    const selectThemeState = useSelector(themeHandler);
    const themeState = selectThemeState.payload.ProfileSettings.theme;

    return (
        <div className={`${props.data.isActive === true ? 'opacity-100' : 'opacity-30'} w-8/12 md:w-11/12 mx-auto font-[bhoma]  bg-gradient-to-tr from-[#2e6edb] to-[#99bdf9] shadow-xl  h-[13rem] md:h-[8rem] relative`}>
        <span className={` ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'}  absolute md:w-[1rem] md:h-[1rem] w-[1.5rem]  h-[1.5rem]  rounded-[50%] left-[-2%] md:left-[-3%]  top-[5%]`}></span>
        <span className={` ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem]  h-[1.5rem]  rounded-[50%] left-[-2%] md:left-[-3%]  top-[20%]`}></span>
        <span className={` ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[2.5rem] md:h-[2.5rem] w-[4rem] h-[4rem] rounded-[50%] left-[-6%] md:left-[-8%] top-[35%]`}></span>
        <span className={` ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem]  h-[1.5rem]  rounded-[50%] left-[-2%] md:left-[-3%]  top-[70%]`}></span>
        <span className={` ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem]  h-[1.5rem]  rounded-[50%] left-[-2%] md:left-[-3%]  top-[85%]`}></span>

        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[-3%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[5%] `}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[13%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[21%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[29%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[37%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[45%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[53%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[61%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[69%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[78%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[87%]`}></span>
        <span className={`opacity-90 ${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute w-[0.9rem] h-[0.9rem] md:w-[0.5rem] md:h-[0.5rem] rounded-[50%] right-[30%] top-[96%]`}></span>


        <span className={`${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem] h-[1.5rem] rounded-[50%] right-[-2%] md:right-[-3%] top-[5%]`}></span>
        <span className={`${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem] h-[1.5rem] rounded-[50%] right-[-2%] md:right-[-3%] top-[20%]`}></span>
        <span className={`${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[2.5rem] md:h-[2.5rem] w-[4rem] h-[4rem] rounded-[50%] right-[-7%] md:right-[-8%] top-[35%]`}></span>
        <span className={`${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem] h-[1.5rem] rounded-[50%] right-[-2%] md:right-[-3%] top-[70%]`}></span>
        <span className={`${ themeState === 'light' ? 'bg-white' : 'bg-[#141414]'} absolute md:w-[1rem] md:h-[1rem] w-[1.5rem] h-[1.5rem] rounded-[50%] right-[-2%] md:right-[-3%] top-[85%]`}></span>
  
        <p className="absolute tracking-[1px] right-[7%] font-[600] text-[4rem] md:text-[2.5rem] font-[monospace] top-14 md:top-8 text-[white]"> %{props.data.discountPercent}</p>
        <p className="absolute tracking-[1px] right-[40%] md:text-[1.25rem] md:right-[37%] font-[600] text-[1.75rem] top-3 text-[white]">{props.data.title}</p>
        <p className="absolute right-[40%] md:right-[37%] text-[1.25rem] md:text-[0.9rem] top-28 md:top-[50%] text-[#eaeaea]">{props.data.description}</p>
        <p className="absolute tracking-[1px] right-[40%] font-[600] text-[1.75rem] md:text-[1.25rem] md:right-[37%] font-[monospace] top-36 md:top-[70%] bg text-[white] bg-[#2a509293] px-3 rounded-[10px]">{props.data.url}</p>

  
  
    </div>
    )
}

export default Ticket;