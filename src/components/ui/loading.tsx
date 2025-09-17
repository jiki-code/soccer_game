import React from 'react'
import { Loader } from 'lucide-react';

const Loading = () => {
    return (
        <div className="flex mt-24 justify-center items-center">
            <Loader className='animate-spin text-blue-700' size={72} />
        </div>
    )
}

export  {Loading}