'use client'

import { ThemeProvider } from 'next-themes'

function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-black dark:text-gray-200 dark:bg-gray-950
        min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers