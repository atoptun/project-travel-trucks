const styles = {
  filterWrapper: {
    position: 'sticky',
    top: 100,
    maxHeight: 'calc(100vh - 124px)',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
    },
  },
};

export default styles;
