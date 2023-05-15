import React from 'react'
import {FcBusinessman} from "react-icons/fc"
import {FcConferenceCall} from "react-icons/fc"
import {FcMusic} from "react-icons/fc"
import {FcGallery} from "react-icons/fc"
import {FcVideoCall} from "react-icons/fc"
import {FcBullish} from "react-icons/fc"
import {FcAdvertising} from "react-icons/fc"
import {FcFilingCabinet} from "react-icons/fc"
import {FcSettings} from "react-icons/fc"
import {FcAssistant} from "react-icons/fc"
import {Link} from "react-router-dom"


const Sidebar = () => {
  function Itm(props){
    return (
      <div className="item w-[200px] h-[50px] mb-1 bg-white text-gray-600 flex text-center rounded-md hover:bg-gray-100 duration-150">
        {props.tag}
        <span className="font-semibold mt-3">{props.name}</span>
      </div>
    );
  }

  return (
    <div className="fixed h-[91.6vh] mt-[53px] w-60 bg-[#A0AECD] flex-col p-5 rounded-xl my-1 ml-1">
      <Link to="/profile/:id">
        <Itm name="Profile" tag={<FcBusinessman className="mx-7 mt-4 w-5 h-5" />} />
      </Link>
      <Link to="/friends">
        <Itm name="Friends" tag={<FcConferenceCall className="mx-7 mt-4 w-5 h-5" />} />
      </Link>
      <Itm name="Music" tag={<FcMusic className="mx-7 mt-4 w-5 h-5" />} />
      <Link to="/gallery">
        <Itm name="Gallery" tag={<FcGallery className="mx-7 mt-4 w-5 h-5" />} />
        </Link>
      <Itm name="Videos" tag={<FcVideoCall className="mx-7 mt-4 w-5 h-5" />} />
      <span>..............................................</span>
      <Itm name="Marketplace" tag={<FcBullish className="mx-7 mt-4 w-5 h-5" />} />
      <Itm name="Events" tag={<FcAdvertising className="mx-7 mt-4 w-5 h-5" />} />
      <Itm name="Files" tag={<FcFilingCabinet className="mx-7 mt-4 w-5 h-5" />} />
      <Itm name="Settings" tag={<FcSettings className="mx-7 mt-4 w-5 h-5" />} />
      <Itm name="Assistant" tag={<FcAssistant className="mx-7 mt-4 w-5 h-5" />} />
    </div>
  )
}

export default Sidebar
