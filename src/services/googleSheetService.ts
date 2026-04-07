import { GOOGLE_SHEET_API_URL } from '../utils/constants';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  message?: string;
  source: 'Contact Page' | 'Enquiry Modal';
}

/**
 * Sends lead data to the configured Google Sheet API endpoint.
 * Deployment instructions can be found in SHEET_SETUP.md
 */
export async function submitLeadToGoogleSheet(data: LeadData): Promise<boolean> {
  // If the user hasn't configured the URL yet, we log it but don't fail the UI.
  // This allows them to keep using the site while setting up the sheet.
  if (!GOOGLE_SHEET_API_URL || GOOGLE_SHEET_API_URL.includes('PASTE_YOUR_URL')) {
    console.warn('Google Sheet API URL not configured. See SHEET_SETUP.md for instructions.');
    console.log('Lead Data (not sent):', data);
    return true; // Return true to allow UI to show success state during testing
  }

  try {
    await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors if not handling OPTIONS
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With 'no-cors', we won't be able to read the response body or status.
    // However, the browser will still send the request.
    return true;
  } catch (error) {
    console.error('Error submitting lead to Google Sheet:', error);
    return false;
  }
}
