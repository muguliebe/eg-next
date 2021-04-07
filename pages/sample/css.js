import Page from '../../components/layout/Page'
import { useState } from 'react'


export default function sampleCss() {

  const [bBool, setBool] = useState(false)

  function handleOnClick(e) {
    const afBool = !bBool
    setBool(afBool)
  }

  return (
    <Page>
      <div className={'mt-10'}>
        {/* >>> Toggle */}
        <div>
        <span aria-checked="false"
              role="checkbox" tabIndex="0"
              className={'relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline'
              + ' ' + (bBool ? 'bg-indigo-600' : 'bg-gray-200')}
              onClick={handleOnClick}
        >
          <span aria-hidden="true"
                className={'inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200'
                + ' ' + (bBool ? 'translate-x-5' : 'translate-x-0')
                } />
        </span>
          {/* <<< Toggle */}
        </div>
      </div>
    </Page>
  )
}
