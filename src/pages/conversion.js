import * as React from "react"
import { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ConversionPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const totalSteps = 4
  const [step, setStep] = useState(0)

  const [formData, setFormData] = useState({
    leadPriorities: [],
    whenToStart: "",
    email: "",
    fullName: "",
    company: "",
    preferredContactMode: "",
    leadBudget: "",
    leadSource: "",
    leadDescription: ""
  })

  const [errors, setErrors] = useState({})

  const handleCheckboxChange = (value) => {
    setFormData(prev => {
      const current = prev.leadPriorities
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
      return { ...prev, leadPriorities: updated }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateStep = () => {
    const newErrors = {}

    if (step === 0) {
      if (formData.leadPriorities.length === 0) newErrors.leadPriorities = "Please select at least one option"
      if (!formData.whenToStart) newErrors.whenToStart = "Please choose a start time"
    }

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
      if (!formData.fullName) newErrors.fullName = "Full name is required"
      if (!formData.company) newErrors.company = "Company name is required"
    }

    if (step === 2) {
      if (!formData.preferredContactMode) newErrors.preferredContactMode = "Select a contact platform"
      if (!formData.leadBudget) newErrors.leadBudget = "Select a budget"
      if (!formData.leadSource) newErrors.leadSource = "Select a source"
    }

    if (step === 3) {
      if (!formData.leadDescription.trim()) newErrors.leadDescription = "Please describe your goals"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, totalSteps - 1))
      setErrors({})
    }
  }

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 0))
  }

  const handleReset = () => {
    setFormData({
      leadPriorities: [],
      whenToStart: "",
      email: "",
      fullName: "",
      company: "",
      preferredContactMode: "",
      leadBudget: "",
      leadSource: "",
      leadDescription: ""
    })
    setStep(0)
    setErrors({})
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="container conversion prose dark:prose-invert">
        <h1>Get ready to join forces!</h1>
        <form
          action={`https://submit-form.com/${data.site.siteMetadata.formActionId}`}
          method="POST"
          className="transition-all duration-300 ease-in-out"
        >
          {[...Array(totalSteps)].map((_, i) => (
            <div
              key={i}
              className={`interactive-section transition-opacity duration-300 ease-in-out ${step === i ? "opacity-100 block" : "opacity-0 hidden"} p-5 border rounded-2xl mb-8`}
            >
              {i === 0 && (
                <>
                  <label className="font-semibold">What are your goals this quarter?</label>
                  <div className="choices">
                    {[
                      { label: "Reinforcement Learning", value: "reinforcement-learning" },
                      { label: "Safety, Ethics, & Compliance Training", value: "safety-ethics-compliance" },
                      { label: "Data Labeling", value: "data-labeling" },
                      { label: "Engine Annotation", value: "engine-annotation" },
                      { label: "Model Evaluation", value: "model-evaluation" },
                      { label: "Domain Specific Training", value: "domain-specific-training" },
                      { label: "Other", value: "other" }
                    ].map(({ label, value }) => (
                      <div key={value} className="flex gap-5">
                        <input
                          type="checkbox"
                          id={`leadPriorities-${value}`}
                          name="leadPriorities"
                          value={value}
                          checked={formData.leadPriorities.includes(value)}
                          onChange={() => handleCheckboxChange(value)}
                        />
                        <label htmlFor={`leadPriorities-${value}`}>{label}</label>
                      </div>
                    ))}
                    {errors.leadPriorities && <p className="text-red-500 text-sm">{errors.leadPriorities}</p>}
                  </div>

                  <label htmlFor="whenToStart" className="font-semibold">When do you want to get started?</label>
                  <select
                    name="whenToStart"
                    id="whenToStart"
                    className={`w-full mb-5 ${errors.whenToStart ? "border-red-500" : ""}`}
                    value={formData.whenToStart}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="asap">ASAP</option>
                    <option value="soon">In 2 weeks</option>
                  </select>
                  {errors.whenToStart && <p className="text-red-500 text-sm">{errors.whenToStart}</p>}
                </>
              )}

              {i === 1 && (
                <>
                  <p className="font-semibold">Let's get to work! How do we contact you?</p>
                  <input
                    className={`input w-full ${errors.email ? "border-red-500" : ""}`}
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                  <input
                    className={`input w-full ${errors.fullName ? "border-red-500" : ""}`}
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

                  <input
                    className={`input w-full ${errors.company ? "border-red-500" : ""}`}
                    type="text"
                    name="company"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                </>
              )}

              {i === 2 && (
                <>
                  <label htmlFor="preferredContactMode">Which platform do you primarily work from?</label>
                  <select
                    name="preferredContactMode"
                    id="preferredContactMode"
                    className={`w-full mb-5 ${errors.preferredContactMode ? "border-red-500" : ""}`}
                    value={formData.preferredContactMode}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select</option>
                    <option value="email">Email</option>
                    <option value="slack">Slack</option>
                    <option value="discord">Discord</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.preferredContactMode && <p className="text-red-500 text-sm">{errors.preferredContactMode}</p>}

                  <label htmlFor="leadBudget">What is your annual data budget?</label>
                  <select
                    name="leadBudget"
                    id="leadBudget"
                    className={`w-full mb-5 ${errors.leadBudget ? "border-red-500" : ""}`}
                    value={formData.leadBudget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select</option>
                    <option value="<$10k">&lt;$10k</option>
                    <option value="$10-$100k">$10-$100k</option>
                    <option value="$100-$500k">$100-$500k</option>
                    <option value="$500k-$1M">$500k-$1M</option>
                    <option value="1M+">1M+</option>
                  </select>
                  {errors.leadBudget && <p className="text-red-500 text-sm">{errors.leadBudget}</p>}

                  <label htmlFor="leadSource">How did you hear about us?</label>
                  <select
                    name="leadSource"
                    id="leadSource"
                    className={`w-full mb-5 ${errors.leadSource ? "border-red-500" : ""}`}
                    value={formData.leadSource}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select</option>
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
                  {errors.leadSource && <p className="text-red-500 text-sm">{errors.leadSource}</p>}
                </>
              )}

              {i === 3 && (
                <>
                  <p className="font-semibold">Last but not least! What are you hoping to accomplish with Pareto?</p>
                  <textarea
                    name="leadDescription"
                    rows="10"
                    className={`textarea border p-5 w-full ${errors.leadDescription ? "border-red-500" : ""}`}
                    placeholder="Describe any project ideas or task examples"
                    value={formData.leadDescription}
                    onChange={handleChange}
                  />
                  {errors.leadDescription && <p className="text-red-500 text-sm">{errors.leadDescription}</p>}

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
