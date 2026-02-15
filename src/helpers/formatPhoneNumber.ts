export const formatPhoneNumber = (number: string | number): string => {
  if(!number) return '0';
  
  const str = String(number);

  const countryCode = str.slice(0, 2);  
  const areaCode    = str.slice(2, 5);     
  const firstPart   = str.slice(5, 8);    
  const secondPart  = str.slice(8, 12);  

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}