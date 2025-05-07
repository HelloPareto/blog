import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="container conversion prose dark:prose-invert">
        <h1>Get ready to join forces!</h1>
        <form action="https://submit-form.com/QBFNC9hYM">
          <div className="interactive-section p-5 border rounded-2xl">
            <div className="ds choices-input form-input">
              <label for="leadPriorities" className="font-semibold">What are your goals this quarter? (Select all that apply)</label>
              <div className="choices">
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-reinforcement-learning" name="leadPriorities" value="reinforcement-learning" />
                  <label for="leadPriorities-reinforcement-learning" className="">Reinforcement Learning</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-safety-ethics-compliance" name="leadPriorities" value="safety-ethics-compliance" />
                  <label for="leadPriorities-safety-ethics-compliance" className="">Safety, Ethics, &amp; Compliance Training</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-data-labeling" name="leadPriorities" value="data-labeling" />
                  <label for="leadPriorities-data-labeling" className="">Data Labelling</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-engine-annotation" name="leadPriorities" value="engine-annotation" />
                  <label for="leadPriorities-engine-annotation" className="">Engine Annotation</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-model-evaluation" name="leadPriorities" value="model-evaluation" />
                  <label for="leadPriorities-model-evaluation" className="">Model Evaluation</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-domain-specific-training" name="leadPriorities" value="domain-specific-training" />
                  <label for="leadPriorities-domain-specific-training" className="">Domain Specific Training</label>
                </div>
                <div className="flex gap-5">
                  <input type="checkbox" id="leadPriorities-other" name="leadPriorities" value="other" />
                  <label for="leadPriorities-other" className="">Other</label>
                </div>
              </div>
            </div>

            <div className="p-0">
              <div className="ds single">
                <label for="whenToStart" className="font-semibold">When do you want to get started?</label>
                <div className="w-60 md:w-80 mb-5">
                  <select className="w-full" name="whenToStart" id="whenToStart">
                    <option value="" disabled="" selected=""></option>
                    <option value="asap">ASAP</option>
                    <option value="soon">In 2 weeks</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid p-5 border rounded-2xl">
            <div className="description-section md-start-5 md-span-6">
              <p className="font-semibold">
                Let's get to work! How do we contact you?
              </p>
            </div>
            <div className="interactive-section">
              <div className="grid">
                <label for="email" className="ds form-label x-paragraph">Email
                </label>
                <input id="email" className="input" type="text" name="email"  data-gtm-form-interact-field-id="2" />
              </div>
              <div className="grid">
                <label for="fullName" className="ds form-label x-paragraph">Full name
                </label>
                <input id="fullName" className="input" type="text" name="fullName"  data-gtm-form-interact-field-id="3" />
              </div>
              <div className="grid">
                <label for="company" className="ds form-label x-paragraph">Company name
                </label>
                <input id="company" className="input" type="text" name="company"  data-gtm-form-interact-field-id="4" />
              </div>
              <div className="my-4 font-semibold">
                <p className="flex gap-5">Already set up?
                  <a href="mailto:team@pareto.ai" className="text-blue-600">Message your project manager
                  </a>.
                </p>
                <p className="flex gap-5">By continuing, you agree to receive communications from Pareto and authorize us to process your personal information in compliance with our
                  <a href="/privacy" className="text-blue-600">privacy policy
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid gap-5 p-5 border rounded-2xl mb-8">
            <div className="description-section md-start-5 md-span-6">
              <p className="font-semibold">
                Please select one of the options 
              </p>
            </div>
            <div className="interactive-section">
              <div className="p-0">
                <div className="ds single">
                  <label for="preferredContactMode" className="ds form-label x-paragraph">Which platform do you primarily work from?
                  </label>
                  <div className="w-60 md:w-80 mb-5">
                    <select className="w-full" name="preferredContactMode" id="preferredContactMode" data-gtm-form-interact-field-id="6">
                      <option value="" disabled="">
                      </option>
                      <option value="email">Email
                      </option>
                      <option value="slack">Slack
                      </option>
                      <option value="discord">Discord
                      </option>
                      <option value="other">Other
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-0">
                <div className="ds single">
                  <label for="leadBudget" className="ds form-label x-paragraph">
                    What is your annual data budget?
                  </label>
                  <div className="w-60 md:w-80 mb-5">
                    <select className="w-full" name="leadBudget" id="leadBudget">
                      <option value="" disabled="">
                      </option>
                      <option value="<$10k">&lt;$10k"
                      </option>
                      <option value="$10-$100k">$10-$100k
                      </option>
                      <option value="$100-$500k">$100-$500k
                      </option>
                      <option value="$500k-$1M">$500k-$1M
                      </option>
                      <option value="1M+">1M+
                      </option>
                    </select>
                  </div>
                  {/* <div className="ds description s-1 x-error">Please select one of the options. 
                  </div> */}
                </div>
              </div>
              <div className="p-0">
                <div className="ds single">
                  <label for="leadSource" className="ds form-label x-paragraph">
                    How did you hear about us?
                  </label>
                  <div className="w-60 md:w-80 mb-5">
                    <select className="w-full" name="leadSource" id="leadSource">
                      <option value="" disabled="">
                      </option>
                      <option value="referral">Referral
                      </option>
                      <option value="google">Google
                      </option>
                      <option value="linkedIn">LinkedIn
                      </option>
                      <option value="twitter">Twitter
                      </option>
                      <option value="instagram">Instagram
                      </option>
                      <option value="facebook">Facebook
                      </option>
                      <option value="reddit">Reddit
                      </option>
                      <option value="blog">Blog post
                      </option>
                      <option value="podcast">Podcast
                      </option>
                      <option value="event">Event
                      </option>
                      <option value="email">Email
                      </option>
                      <option value="other">Other
                      </option>
                    </select>
                  </div>
                  {/* <div className="ds description s-1 x-error">Please select one of the options.
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="p-5 border rounded-2xl">
            <div className="description-section md-start-5 md-span-6">
              <p className="font-semibold">
                Last but not least! What are you hoping to accomplish with Pareto?
              </p>
            </div>
            <div className="interactive-section">
              <div className="ds text-area-input form-w-full">
                <label for="leadDescription" className="ds form-label x-paragraph">
                  Describe any project ideas or task examples to help us get started faster.
                </label>
                <textarea id="leadDescription" name="leadDescription" rows="10"
                  className="textarea border p-5 w-full" />
              </div>
            </div>
          </div>
          <input
            type="hidden"
            name="_redirect"
            value="https://pareto-test.netlify.app/conversion"
          />

          <button type="submit" className="py-2 px-8 text-white bg-blue-700 rounded-full mt-8">Send</button>
        
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }

`
