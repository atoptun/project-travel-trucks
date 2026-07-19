const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'custom.inputs',
    borderRadius: '16px',
    p: { xs: 1, sm: 3 },
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: { xs: 220, sm: 488 },
    objectFit: 'contain',
    objectPosition: 'center',
    mb: 3,
  },
  actions: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default styles;
