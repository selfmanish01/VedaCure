import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '12vh',
        marginTop: '4px',
        backgroundColor: 'white',
      },
      heading: {
        color: '#DD00FF',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: { // media query of mui
      container: {
        flexDirection: 'column-reverse',
      }
    },
    appBarSearch: {
      borderRadius: 4,
      marginBottom: '1rem',
      display: 'flex',
      padding: '16px',
    },
    pagination: {
      borderRadius: 4,
      marginTop: '1rem',
      padding: '16px',
    },
    gridContainer: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
}));