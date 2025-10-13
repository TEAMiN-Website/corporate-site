import { supabase } from './supabase';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  error?: string;
}

/**
 * Submit contact form data to Supabase database and trigger email notification
 * @param formData - The contact form data
 * @returns Promise with submission result
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactSubmissionResult> {
  try {
    // Insert into contacts table
    const { data, error: insertError } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting contact:', insertError);
      return {
        success: false,
        error: 'Failed to save contact information. Please try again.',
      };
    }

    // Call the Edge Function to send email
    const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
      body: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        contactId: data?.id,
      },
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      // Note: The contact was saved, but email failed
      return {
        success: true,
        error: 'Contact saved but email notification failed. We will respond soon.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error submitting contact form:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
