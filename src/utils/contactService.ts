export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  interest?: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Contact form submitted:', data);

    return {
      success: true,
      message: 'Form submitted successfully'
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit form'
    };
  }
};
