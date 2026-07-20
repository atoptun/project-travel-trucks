const styles = {
  // MainInfo
  mainCard: {
    p: { xs: 2, sm: 3 },
    borderColor: 'transparent',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 0,
    '&:last-child': {
      pb: 0,
    },
  },
  mainTitleWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'space-between',
  },
  mainSubTitle: {
    display: 'flex',
    rowGap: 0.5,
    columnGap: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: 1,
  },

  // VehicleDatails
  detailsCard: {
    p: { xs: 2, sm: 3 },
    borderColor: 'transparent',
    backgroundColor: 'custom.inputs',
  },
  detailsContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: 0,
    '&:last-child': {
      pb: 0,
    },
  },
};

export default styles;
