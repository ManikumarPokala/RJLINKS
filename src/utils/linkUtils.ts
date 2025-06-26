export function generateShortCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
  } catch {
    return false
  }
}

export function getDeviceType(): string {
  const userAgent = navigator.userAgent
  if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent)) {
    return 'Mobile'
  }
  if (/Tablet|iPad/i.test(userAgent)) {
    return 'Tablet'
  }
  return 'Desktop'
}

export async function getCountryFromIP(): Promise<string> {
  try {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    return data.country_name || 'Unknown'
  } catch {
    return 'Unknown'
  }
}