import React from 'react'
import { LuExternalLink } from 'react-icons/lu'

const JoinButton = () => {
  return (
    <button className="py-4 px-2  flex justify-start items-center">
    <div className="bg-blue-500 rounded-lg py-2 px-4 text-white">
      <div className="flex justify-center items-center gap-2">
        Join now
        <LuExternalLink className="text-xl" />
      </div>
    </div>
  </button>
  )
}

export default JoinButton