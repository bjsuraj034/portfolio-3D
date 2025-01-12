import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  //7mkKZbr3PNPAub4Ur
  //template_kbbuu3f template id
  //service_nr42ib4 service
  const formRef=useRef()
 const [form, setform] = useState({
  name:'',
  email:'',
  message:''
 })
 const [loading, setloading] = useState(false)
 const handleChange=(e)=>{
  const {name,value}=e.target;
  setform({...form,[name]:value})

 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  setloading(true)
  emailjs.send('service_nr42ib4','template_kbbuu3f',{
    from_name:form.name,
    to_name:'Suraj',
    from_email:form.email,
    to_email:'itsmesuraj034@gmail.com',
    message:form.message
  },'7mkKZbr3PNPAub4Ur').then(()=>{
    setloading(false);
    alert('Thank you .I will get you back sir as soon as possible')
  })
  setform({
    name:"",
    email:"",
    message:""
  })
,(error)=>{
  setloading(false)
  console.log(error)
  alert('something went wrong')
}


 }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left',"tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" value={form.name} name="name" id="" onChange={handleChange} placeholder='whats your name' className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type="email" required value={form.email} name="email" id="" onChange={handleChange} placeholder='whats your email' className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your name</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder='What do you want to change' id=""  className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium' ></textarea>
          </label>
          <button className='bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary' type='submit'>
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
        
      </motion.div>
      <motion.div variants={slideIn('right',"tween",0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")