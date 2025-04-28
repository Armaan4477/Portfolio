const getImagePath = (src) => {
  // Get base path from the environment or use repository name for production
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  
  // If src already starts with http or https, return it as is (for external images)
  if (src.startsWith('http')) {
    return src;
  }
  
  // Ensure src starts with a slash
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Combine base path with src
  return `${basePath}${normalizedSrc}`;
};

export default getImagePath;
