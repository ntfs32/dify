import React from 'react'
import type { ReactNode } from 'react'
import SwrInitor from '@/app/components/swr-initor'
import { AppContextProvider } from '@/context/app-context'
import GA, { GaType } from '@/app/components/base/ga'
import HeaderWrapper from '@/app/components/header/HeaderWrapper'
import Header from '@/app/components/header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GA gaType={GaType.admin} />
      <SwrInitor>
        <AppContextProvider>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          {children}
        </AppContextProvider>
      </SwrInitor>
    </>
  )
}

export const metadata = {
  title: 'Dify',
}

export default Layout
