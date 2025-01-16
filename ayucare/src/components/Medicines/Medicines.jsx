import React from 'react'
import { Grid } from '@material-ui/core';
import Medicine from './Medicine';
import useStyles from './style'

const Medicines = ({medicines, fetchPharmacologicalProperties, pharma, setPharma}) => {

  const classes = useStyles();

  return (
    <div style={{ background: 'var(--black-gradient)', paddingTop: '3vh' }}>
      <h1 className="font-poppins font-semibold text-white ss:text-[40px] text-[17px] my-10" style={{ marginTop: '3vh', marginLeft: '2.5vw' }}>Here are your Results!</h1>
    {medicines.length ? (
      <Grid className={classes.container} container alignItems="stretch" spacing={2} style={{ marginLeft: '2.5vw', marginRight: '2.5vw', maxWidth: '95vw' }}>
                {medicines.map((medicine) => (
                    <Grid key={medicine._id} item xs={12} sm={12} md={6} lg={6}>
                        <Medicine medicine={medicine} fetchPharmacologicalProperties={fetchPharmacologicalProperties} pharma={pharma} setPharma={setPharma} />
                    </Grid>
                ))}
            </Grid>
    ) : null}
    </div>
  )
}

export default Medicines;
