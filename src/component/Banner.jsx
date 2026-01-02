const Banner = ({ imageUrl, altText = 'Banner Image' }) => {
  const bannerStyle = {
    width: '100%',
    height: '300px',
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'center',
    backgroundPosition: 'center',
    borderRadius: '10px',
  };

  return <div style={bannerStyle} role="img" aria-label={altText}></div>;
};

export default Banner;
