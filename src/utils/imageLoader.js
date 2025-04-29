const getImagePath = (src) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  
  if (src.startsWith('http')) {
    return src;
  }
  
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
};

export default getImagePath;
