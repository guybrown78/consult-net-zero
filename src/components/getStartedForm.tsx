'use client'

import React, { useState } from 'react'
import { Button } from '@/components/button'
import { TextField, TextAreaField } from '@/components/fields'
import type { FormEvent } from 'react'

const Spinner: React.FC = () => {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z" />
    </svg>
  )
}

const ArrowRight: React.FC = () => {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
    </svg>
  )
}

const formatDate = async (): Promise<string> => {
  const d = new Date()
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const GetStartedForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    setIsSuccess(false)
    setIsError(false)
    setIsLoading(true)

    const date = await formatDate()

    console.log('date', date)

    // Example Airtable API integration (commented out):
    /*
    base('WebsiteContactForm').create([
      {
        "fields": {
          FirstName: event.target.first_name.value,
          LastName: event.target.last_name.value,
          Email: event.target.email.value,
          Phone: event.target.phone.value,
          Service: event.target.service.value,
          Message: event.target.message.value,
          SentDate: date,
        }
      },
    ], function(err, records) {
      if (err) {
        console.error(err)
        setIsError(true)
        setIsLoading(false)
        return
      }
      records.forEach(function (record) {
        console.log(record.getId())
        setIsSuccess(true)
        setIsLoading(false)
      })
    });
    */
  }

  return (
    <form
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Title"
        id="title"
        name="title"
        type="text"
        autoComplete="title"
        required
      />

      <TextField
        label="First name"
        id="first_name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        required
      />
      <TextField
        label="Last name"
        id="last_name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        required
      />
      <TextField
        className="col-span-full"
        label="Email address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <TextField
        className="col-span-full"
        label="Phone number"
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
      />
      <TextAreaField
        className="col-span-full"
        label="Message"
        id="message"
        name="message"
        rows={2}
      />

      {!isSuccess && !isError && (
        <div className="col-span-full">
          <Button type="submit" className="w-full">
            {!isLoading && (
              <span className="flex items-center">
                Send Message{' '}
                <span aria-hidden="true" className="ml-2 w-5 h-5 fill-aoc-navy">
                  <ArrowRight />
                </span>
              </span>
            )}
            {isLoading && (
              <span className="flex items-center">
                Sending{' '}
                <span
                  aria-hidden="true"
                  className="ml-2 w-5 h-5 animate-spin fill-aoc-navy"
                >
                  <Spinner />
                </span>
              </span>
            )}
          </Button>
        </div>
      )}
      {isSuccess && (
        <div className="col-span-full bg-green-50 p-4 rounded-md">
          <p className="font-light text-sm text-aoc-navy">
            <span className="font-semibold">Thank you.</span> Your message has
            been received, and you will be contacted shortly.
          </p>
        </div>
      )}
      {isError && (
        <div className="col-span-full bg-pink-50 p-4 rounded-md">
          <p className="font-light text-sm text-aoc-navy">
            <span className="font-semibold">Oh dear.</span> There has been a
            problem while sending your message. This will be resolved as soon as
            possible.
          </p>
          <p className="font-light text-sm text-aoc-navy mt-2">
            In the meantime, please send any messages direct to{' '}
            <a
              href="mailto:lee@consultnetzero.co.uk"
              target="_blank"
              className="font-medium underline cursor-pointer"
            >
              lee@consultnetzero.co.uk
            </a>
          </p>
        </div>
      )}
    </form>
  )
}

export default GetStartedForm