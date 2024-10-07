'use client'

// Imports 
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

// Import components 
import { Button } from '@/components/button/Button'
import { Input } from '@/components/input/Input'
import { Headline } from '@/components/headline/Headline'
import { MessageCard } from '@/components/message-card/MessageCard'

export const NewsletterForm = () => {
    // All states 
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)

    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN

    // Handlechange function for input 
    const handleChange = (e) => {
        setEmail(e.target.value.toLowerCase())
    }

    // Function to show message card 
    const showMessageCard = () => {
        setSuccessMessage(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [successMessage])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEmail('')
        setErrorMessage('')
        setSuccessMessage(false)

        try {
            const response = await fetch(
                'https://connect.mailerlite.com/api/subscribers',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        Authorization: `Bearer ${apiToken}`
                    },
                    body: JSON.stringify({
                        email: email
                    })
                }
            )

            const data = await response.json()
            console.log(data)

            if(data.errors) {
                setErrorMessage(data?.message)
                setErrorMessage('Please enter a valid email address')
                return
            } showMessageCard()
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <section className={styles.newsletter__section}>
        {successMessage &&             
            <MessageCard
                title='You are successfully subscribed to our news'
            />}
        <div className='container'>
            <div className={styles.wrapper}>
                <Headline
                    style={{ textAlign: 'center'}}
                    title='Subscribe to Our Latest News'
                    level={2}
                />
                <form 
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.input__wrapper}>
                        <Input 
                            value={email}
                            onChange={handleChange}
                        />
                        {errorMessage && <p className={styles.form__error}>{errorMessage}</p>}
                    </div>
                    <Button
                        text='Send'
                        buttonType='filled'
                        type='submit'
                    />
                </form>
            </div>
        </div>
    </section>
  )
}
