import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ConversionPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [step, setStep] = useState(0)
  const totalSteps = 4

  const handleNext = () => setStep(prev => Math.min(prev + 1, totalSteps - 1))
  const handleBack = () => setStep(prev => Math.max(prev - 1, 0))
  const handleReset = () => setStep(0)
  return (
    <Layout location={location} title={siteTitle}>
      <div className="container conversion prose dark:prose-invert">
        <h1>Get ready to join forces!</h1>
        <form action={`https://submit-form.com/${data.site.siteMetadata.formActionId}`}> 
        {/* "https://submit-form.com/QBFNC9hYM" */}
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              style={{ display: step === i ? "block" : "none" }}
              className="interactive-section p-5 border rounded-2xl mb-8"
            >
              {i === 0 && (
                <>
                  <label className="font-semibold">
                    What are your goals this quarter? (Select all that apply)
                  </label>
                  <div className="choices">
                    {/* Checkbox inputs */}
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

                  <label htmlFor="whenToStart" className="font-semibold">When do you want to get started?</label>
                  <select name="whenToStart" id="whenToStart" className="w-full mb-5">
                    <option value="" disabled selected></option>
                    <option value="asap">ASAP</option>
                    <option value="soon">In 2 weeks</option>
                  </select>
                </>
              )}

              {i === 1 && (
                <>
                  <p className="font-semibold">Let's get to work! How do we contact you?</p>
                  <input id="email" className="input" type="text" name="email" placeholder="Email" />
                  <input id="fullName" className="input" type="text" name="fullName" placeholder="Full name" />
                  <input id="company" className="input" type="text" name="company" placeholder="Company name" />
                </>
              )}

              {i === 2 && (
                <>
                  <label htmlFor="preferredContactMode">Which platform do you primarily work from?</label>
                  <select name="preferredContactMode" id="preferredContactMode" className="w-full mb-5">
                    <option value="" disabled></option>
                    <option value="email">Email</option>
                    <option value="slack">Slack</option>
                    <option value="discord">Discord</option>
                    <option value="other">Other</option>
                  </select>

                  <label htmlFor="leadBudget">What is your annual data budget?</label>
                  <select name="leadBudget" id="leadBudget" className="w-full mb-5">
                    <option value="" disabled></option>
                    <option value="<$10k">&lt;$10k</option>
                    <option value="$10-$100k">$10-$100k</option>
                    <option value="$100-$500k">$100-$500k</option>
                    <option value="$500k-$1M">$500k-$1M</option>
                    <option value="1M+">1M+</option>
                  </select>

                  <label htmlFor="leadSource">How did you hear about us?</label>
                  <select name="leadSource" id="leadSource" className="w-full mb-5">
                    <option value="" disabled></option>
                    <option value="referral">Referral</option>
                    <option value="google">Google</option>
                    <option value="linkedIn">LinkedIn</option>
                    <option value="twitter">Twitter</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="reddit">Reddit</option>
                    <option value="blog">Blog post</option>
                    <option value="podcast">Podcast</option>
                    <option value="event">Event</option>
                    <option value="email">Email</option>
                    <option value="other">Other</option>
                  </select>
                </>
              )}

              {i === 3 && (
                <>
                  <p className="font-semibold">Last but not least! What are you hoping to accomplish with Pareto?</p>
                  <textarea id="leadDescription" name="leadDescription" rows="10" className="textarea border p-5 w-full" placeholder="Describe any project ideas or task examples"></textarea>
                  <input type="hidden" name="_redirect" value={data.site.siteMetadata.formActionRedirect} />
                </>
              )}

              <div className="mt-4 flex gap-4">
                {i > 0 && <button type="button" onClick={handleBack}>← Back</button>}
                {i < totalSteps - 1 ? (
                  <button type="button" onClick={handleNext}>Next →</button>
                ) : (
                  <button type="submit" className="py-2 px-8 text-white bg-blue-700 rounded-full">Send</button>
                )}
                <button type="button" onClick={handleReset}>Reset ⤬</button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Conversion" />

export default ConversionPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        formActionId
        formActionRedirect
        title
      }
    }
  }

`
