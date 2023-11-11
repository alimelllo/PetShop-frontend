import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="py-1">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#e96d2f]' : 'bg-[#a3a3a3]'}
          relative inline-flex h-[31px] w-[67px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-[white] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default ThemeToggle;
