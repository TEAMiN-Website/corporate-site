import { supabase } from "../utils/supabase/client";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message?: string }> => {
  try {
    const { error } = await supabase
      .from('contacts')
      .insert([{
        username: data.name,
        email: data.email,
        message: data.message,
      }]);

    if (error) {
      throw error;
    }

    return {
      success: true
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
