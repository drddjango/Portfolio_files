export const validatePhoneNumber = (val : any) => {
    if (!val) return true // Optional field, so empty is okay

    // Remove all non-digit characters
    const digitsOnly = val.replace(/\D/g, '')

    if (digitsOnly.startsWith('1') || digitsOnly.startsWith('91')) {
      // If starts with country code (1 for US or 91 for India), check for 11 or 12 digits
      return digitsOnly.length === 11 || digitsOnly.length === 12
    } else {
      // If no country code, check for exactly 10 digits
      return digitsOnly.length === 10
    }
  }
