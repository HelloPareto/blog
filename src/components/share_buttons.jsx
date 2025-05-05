import React from "react"
import { SocialIcon } from "react-social-icons"

const ShareButtons = () => (
  <div className="flex gap-5 items-center">
    <SocialIcon
      url="https://www.facebook.com/sharer/sharer.php?u=https://pareto.ai/blog/26-prompting-principles-for-llms"
      style={{ height: 36, width: 36 }}
      target="_blank"
      rel="noreferrer"
    />
    <SocialIcon
      url="https://twitter.com/intent/tweet?url=https://pareto.ai/blog/26-prompting-principles-for-llms"
      target="_blank"
      rel="noreferrer"
      style={{ height: 36, width: 36 }}
    />
  </div>
)

export default ShareButtons
