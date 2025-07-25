'use client'

// Imports 
import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

// Import components 
import { Button } from '@/components/button/Button'
import { PortableText } from '@/components/portable-text/PortableText'
import { MessageCard } from '@/components/message-card/MessageCard'
import { AdaptiveImage } from '@/components/adaptive-image/AdaptiveImage'

export const ArticleContent = ({ post }) => {
    const [showMessage, setShowMessage] = useState(false)
    
    // Hide message after 3 seconds
    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [showMessage])
    
    // Clipboard function
    const handleShareClick = () => {
        const currentUrl = window.location.href
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                setShowMessage(true)
            })
            .catch(err => {
                console.error('Cannot copy the link!', err)
            })
    }
    
    // If there is no post data, show placeholder
    if (!post) return null
    
    return (
        <section className={styles.articleContent__section}>
            {showMessage && (
                <MessageCard title="Link copied to clipboard" />
            )}
            <div className="container">
                <div className={styles.articleContent__container}>
                    {post.mainImage && (
                        <AdaptiveImage 
                            image={post.mainImage}
                            alt={post.mainImage.alt || post.title}
                            rounded={true}
                            priority={true}
                        />
                    )}
                    
                    <div className={styles.articleContent__wrapper}>
                        {post.body && <PortableText value={post.body} />}
                        
                        <div className={styles.articleContent__divider}></div>
                        
                        <Button
                            text='Share this article'
                            buttonType='outlined'
                            onClick={handleShareClick}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
