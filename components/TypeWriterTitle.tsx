"use client"

import Typewriter from "typewriter-effect"

 const TypeWriterTitle = () => {
  return (
    <Typewriter options={{loop:true,}} onInit={(Typewriter) => {
        Typewriter.typeString("⚡ Convert your video or voice into a Blog in second with the power of AI!").pauseFor(500).deleteAll().typeString(" 📝 AI-power Insights.")
        .start()
    }}/>
  )
}
export default TypeWriterTitle