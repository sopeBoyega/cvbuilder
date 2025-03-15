"use client"
import React, { useState } from 'react'
import { ProfilePic } from './profile-pic'
import { Button, Input, Textarea, } from '@chakra-ui/react'
import { InputGroup } from '../ui/input-group'

type Props = {}

const AccountSettings = (props: Props) => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        username: "",
        phoneNumber: "",
        bio: "",
      })

      const handleChange = (e : React.ChangeEvent<HTMLInputElement > | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
      }

      const handleReset = () => {
        setFormData({
          fullName: "",
          email: "",
          username: "",
          phoneNumber: "",
          bio: "",
        })
      }

      const handleSubmit = (event : any) => {
        event.preventDefault()
        console.log("Form Data:", formData)
      }
  return (
    <div className='text-white mt-3 flex flex-col gap-7'>
        <ProfilePic/>
        <hr className='w-full border border-[#E0E4EC]' />
        <div className="bg-transparent rounded-xl w-full max-w-4xl mx-auto text-white">
      <form onSubmit={handleSubmit} className="w-full space-y-12 bg-transparent">
        {/* Full Name and Email */}
        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label className="block mb-1 text-sm">Full name</label>
            <Input
              name="fullName"
              placeholder="Please enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-transparent text-white border-[1.74px] border-white w-full"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-sm">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-white border-[1.74px] border-white w-full"
            />
          </div>
        </div>

        {/* Username and Phone Number */}
        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label className="block mb-1 text-sm">Username</label>
            <Input
              name="username"
              placeholder="Please enter your username"
              value={formData.username}
              onChange={handleChange}
              className="bg-transparent text-white border-[1.74px] border-white w-full"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-sm">Phone number</label>
            <InputGroup startElement="+1">
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Please enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-transparent w-full text-white border-[1.74px] border-white"
              />
            </InputGroup>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 text-sm">Bio</label>
          <Textarea
            name="bio"
            placeholder="Write your Bio here e.g your hobbies, interests ETC"
            value={formData.bio}
            onChange={handleChange}
            className="bg-transparent text-white border-[1.74px] border-white w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <Button
            type="submit"
            colorScheme="blue"
            className="px-4 py-2 font-semibold rounded-md"
          >
            Update Profile
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="px-4 py-2 font-semibold rounded-md"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default AccountSettings
