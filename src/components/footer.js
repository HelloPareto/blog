import * as React from "react"
import ThemeToggle from "./themeToggle"

const Footer = () => (
  <footer className="ds section ds footer x-undefined y-background-far grid">
    <div className="wrapper grid span-grid spaced">
      <div className="title span-8 md-start-2 md-span-12">
        <p className="h2 remove-top-margin">Premium data by top labelers to fine-tune AI/LLM models</p>
        <div className="ds theme-selector hide-on-mobile">
          <ThemeToggle />
        </div>
      </div>
      <div className="footer-nav md-start-2 md-span-3 span-4">
        <p className="remove-top-margin h4">Solutions</p>
        <div className="link-wrapper"><a href="/rlhf">RLHF</a></div>
        <div className="link-wrapper"><a href="/reinforcement-learning">Side by side RL</a></div>
        <div className="link-wrapper"><a href="/original-content-generation">Original content</a></div>
        <div className="link-wrapper"><a href="/llm-hallucination-testing">Creative hallucination</a></div>
        <div className="link-wrapper"><a href="/ai-safety-ethics-training">Safety, ethics, &amp; compliance</a></div>
        <div className="link-wrapper"><a href="/ai-factuality-training">Honesty and factuality training</a></div>
        <div className="link-wrapper"><a href="/llm-prompting">LLM prompting</a></div>
        <div className="link-wrapper"><a href="/data-classification-and-indexing">Data classification &amp; indexing</a></div>
        <div className="link-wrapper"><a href="/engine-annotation">Engine annotation</a></div>
        <div className="link-wrapper"><a href="/llm-fluency-relevancy-grading">LLM fluency and relevancy grading</a></div>
        <div className="link-wrapper"><a href="/chain-of-thought-reasoning">Chain-of-thought reasoning</a></div>
      </div>
      <div className="footer-nav md-start-5 md-span-3 span-4">
        <p className="remove-top-margin h4">Ops services</p>
        <div className="link-wrapper"><a href="/outsourced-operations">Outsourced ops assistants</a></div>
        <div className="link-wrapper"><a href="/outsourced-operations/how-it-works">How it works</a></div>
        <div className="link-wrapper"><a href="/outsourced-ops-solutions">Explore ops solutions</a></div>
      </div>
      <div className="footer-nav md-start-8 md-span-3 span-4">
        <p className="remove-top-margin h4">Resources</p>
        <div className="link-wrapper"><a href="/blog/">Blog</a></div>
        <div FooterclassName="link-wrapper"><a href="/careers/ai-trainer">Apply to train AI</a></div>
        <div className="link-wrapper"><a href="/careers">Join our team</a></div>
      </div>
      <div className="footer-nav md-start-11 md-span-3 span-4">
        <p className="remove-top-margin h4">Contact</p><a href="mailto:team@pareto.ai" className="contact-info">team@pareto.ai</a>
      </div>
      <div className="ds theme-selector hide-on-desktop start-5 span-4"><span className="c-x x-paragraph">Light
        Theme</span><button className="ds toggle-switch" type="button"><input type="checkbox"
          id="theme-toggle"/></button></div>
      <p className="logo s2 md-start-2 md-span-2 span-8"><span className="icon s2 c-x x-heading">z</span><span
        className="h3">Pareto</span></p>
      <div className="social-links md-start-11 md-span-3 span-8"><a href="https://www.facebook.com/hellopareto"
        target="_blank" rel="noreferrer"><button className="ds x-facebook social-media-button"
          type="button">f</button></a><a href="https://www.twitter.com/hellopareto" target="_blank"
            rel="noreferrer"><button className="ds x-twitter social-media-button" type="button">t</button></a><a
              href="https://www.instagram.com/hellopareto" target="_blank" rel="noreferrer"><button
                className="ds x-instagram social-media-button" type="button">i</button></a><a
                  href="https://www.linkedin.com/company/hellopareto" target="_blank" rel="noreferrer"><button
                    className="ds x-linkedin social-media-button" type="button">l</button></a><a
                      href="https://www.threads.net/@hellopareto" target="_blank" rel="noreferrer"><button
                        className="ds x-threads social-media-button" type="button">u</button></a></div>
      <div className="span-grid grid bottom-section md-start-2 md-span-12">
        <div className="md-start-2 md-span-12 span-8">
          <div className="copyright-info">
            <p className="remove-top-margin">© 2025 Pareto All Rights Reserved.</p><svg
              className="ds svg md-start-12 md-span-3 span-8" xmlns="http://www.w3.org/2000/svg" version="1.1"
              preserveAspectRatio="xMinYMin meet" width="100%" viewBox="0 0 89 89">
              <use className="" href="/wbenc-logo.svg#WBENC-Logo"></use>
            </svg>
          </div>
        </div>
        <div className="privacy-info span-8">
          <div className="link-wrapper"><a href="https://coda.io/d/_dr5LIWr56Zl/Code-of-Conduct_sui96Vp5" target="_blank"
            rel="noopener noreferrer">Code of conduct</a></div>
          <div className="link-wrapper"><a href="/privacy">Privacy policy</a></div>
          <div className="link-wrapper"><a href="/terms">Terms</a></div>
          <div className="link-wrapper"><a href="/cookies">Cookies</a></div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer