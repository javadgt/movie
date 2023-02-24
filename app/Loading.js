import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center'>
        <Image
        src={'./loading.svg'}
        alt='loading'
        width={300}
        height={300}
        />
    </div>
  )
}

export default loading