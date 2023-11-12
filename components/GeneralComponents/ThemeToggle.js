import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import {
  themeHandler
} from "../../Redux/Reducers/Settings/Profile/ProfileSettings.ts";
const ThemeToggle = () => {


  const selectThemeState = useSelector(themeHandler);
  const themeState = selectThemeState.payload.ProfileSettings.theme;
  const SetThemeHandler = useDispatch();

  return (
    <div className="py-1">
      <Switch
        checked={themeState === 'light' ? false : true}
        onChange={() =>{themeState === 'dark' ? SetThemeHandler(themeHandler('light')) : SetThemeHandler(themeHandler('dark'))}}
        className={`${themeState === 'dark' ? 'bg-[#e96d2f]' : 'bg-[#a3a3a3]'}
          relative inline-flex h-[31px] w-[67px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${themeState === 'dark' ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-[white] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default ThemeToggle;
