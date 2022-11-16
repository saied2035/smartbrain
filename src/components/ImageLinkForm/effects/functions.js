export const imageToBase64 = file => {
	
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
  });
}