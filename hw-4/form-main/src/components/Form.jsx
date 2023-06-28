import React from 'react'
import { useState } from 'react'

export default function Form() {
  const [data, setData] = useState({ name: '', email: '', phone: '', meassage: '' })
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <form method='post' onSubmit={handleSubmit}>
      <h1>
        Contact <span>Here</span>
      </h1>
      <input
        type='text'
        name='name'
        id=''
        onChange={handleChange}
        value={data.name}
        placeholder='Enter name'
      />
      <input
        type='email'
        name='email'
        id=''
        onChange={handleChange}
        value={data.email}
        placeholder='example@gmail.com'
      />
      <input
        type='phone'
        name='phone'
        id=''
        onChange={handleChange}
        value={data.phone}
        placeholder='+996'
      />
      <textarea
        name='message'
        id=''
        cols='30'
        onChange={handleChange}
        value={data.message}
        rows='10'
        placeholder='Type here'
      />
      <button type='submit'>send</button>
      <p>
        {data.name}{data.email}{data.phone}{data.message}
      </p>
    </form>
  )
}
