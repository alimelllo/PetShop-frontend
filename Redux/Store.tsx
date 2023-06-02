import { configureStore } from '@reduxjs/toolkit';
import ProfileSettings from './Reducers/Settings/Profile/ProfileSettings.ts';

export default configureStore({
  reducer: {
    ProfileSettings
  },
})