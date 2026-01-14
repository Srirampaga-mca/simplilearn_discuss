'use server'

// This creates a type for the response so your frontend knows what to expect
export type FormState = {
  message: string;
  success: boolean;
}

export async function submitToAirtable(prevState: FormState, formData: FormData) {
  const email = formData.get('email') as string; // 'as string' stops TS from complaining

  if (!email) {
    return { success: false, message: 'Email is required' };
  }

  const AIRTABLE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TOKEN = process.env.AIRTABLE_PAT;
  const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Table 1';

  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_ID}/${TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Email: email 
        }
      })
    });

    if (!response.ok) {
        return { success: false, message: 'Failed to submit to Airtable' };
    }

    return { success: true, message: 'Success! You are on the list.' };
    
  } catch (e) {
    return { success: false, message: 'Server error occurred' };
  }
}