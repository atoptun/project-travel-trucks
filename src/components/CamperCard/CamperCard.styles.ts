const styles = {
  card: {
    display: 'flex',
    borderRadius: 4,
    p: { xs: 2, sm: 3 },

    flexDirection: 'column',
    gap: 3,

    '@media (min-width: 600px)': {
      flexDirection: 'row',
    },

    '@supports (container-type: inline-size)': {
      '@media (min-width: 600px)': {
        flexDirection: 'row',
      },

      containerType: 'inline-size',
      containerName: 'camperCard',
      flexDirection: 'column',

      '@container camperCard (min-width: 550px)': {
        flexDirection: 'row',
      },
    },
  },
  imageWrapper: {
    flex: '1 1 219px',
    height: 240,
    maxWidth: { xs: '100%', sm: 219 },
    '@supports (container-type: inline-size)': {
      width: '100%',
      aspectRatio: '16/10',

      '@container camperCard (min-width: 550px)': {
        width: 219,
        height: 240,
        flexShrink: 0,
      },
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 2,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    flex: '999 1 240px',
    // minWidth: 300,
    p: 0,
    '&:last-child': {
      pb: 0,
    },
  },
  titleWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'space-between',
  },
  title: { fontWeight: 600, lineHeight: 1.33 },
  subTitleWrapper: {
    display: 'flex',
    rowGap: 0.5,
    columnGap: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  subTitle: { display: 'flex', alignItems: 'center', gap: 0.5 },
};

export default styles;
