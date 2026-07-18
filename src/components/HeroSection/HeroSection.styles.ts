const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: {
      xs: '95vh',
      md: '95vh',
    },
    overflow: 'hidden',
  },
  backImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    px: { xs: 3, md: 8 },
    backgroundColor: 'rgb(0 0 0 0.2)',
  },
  title: {
    color: 'custom.inputs',
    fontWeight: 600,
    mb: 2,
    lineHeight: 1,
    fontSize: '3rem',
  },
  subTitle: { color: 'custom.inputs', mb: 5 },
  button: {
    selfAlign: 'flex-start',
    width: 'fit-content',
    px: '50px',
    '@media (max-width: 250px)': {
      px: '20px',
    },
  },
};

export default styles;
