const getImagePath = (src) => {
  if (src.startsWith('http')) {
    return src;
  }
  
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return normalizedSrc;
};

export default getImagePath;
