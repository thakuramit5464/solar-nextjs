"use client"
import { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    return (
        <form className="space-y-4 max-w-xl">
            <div>
                <label className="block text-sm">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block text-sm">Phone / WhatsApp</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block text-sm">Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full border p-2 rounded" />
            </div>
            <div>
                <button type="button" className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
            </div>
        </form>
    )
}
