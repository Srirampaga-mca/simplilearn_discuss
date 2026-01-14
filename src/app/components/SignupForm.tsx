'use client'

import { useActionState } from 'react'; // If this errors, change to 'react-dom'
import { submitToAirtable } from '@/app/actions';

const initialState = {
  message: '',
  success: false,
};

export default function SignupForm() {
  // This hook connects your form to the server action
  const [state, formAction] = useActionState(submitToAirtable, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input 
        name="email" 
        type="email" 
        placeholder="Enter your email" 
        required 
        className="border border-gray-300 rounded p-2 text-black"
      />
      
      <button 
        type="submit" 
        className="bg-black text-white p-2 rounded hover:bg-gray-800 transition"
      >
        Join Waitlist
      </button>

      {/* Show success/error message below the button */}
      {state?.message && (
        <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}