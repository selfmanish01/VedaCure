import React, { useState } from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import useStyles from "./style";

const Medicine = ({ medicine, fetchPharmacologicalProperties, pharma, setPharma }) => {
  
  const [med, setMed] = useState("");
  const classes = useStyles();

  return (
    <Card raised elevation={6}>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Name: {medicine.Name}
        </Typography>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Indications: {medicine?.Indications?.map((indication) => `${indication}, `)}
        </Typography>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Indications - Common Name: {medicine.IndicationsCommonName.map((indication) => `${indication}, `)}
        </Typography>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Precautions: {medicine.Precaution === "NS" ? "Not Specified" : medicine.Precaution}
        </Typography>
        { pharma?.length && med === medicine.Name ? (
          <Typography className={classes.title} variant="body1" gutterBottom>
            Pharmacological Properties- <br />
            Rasa (Taste): {pharma[0]} <br />
            Guna (Quality): {pharma[1]} <br />
            Virya (Potency): {pharma[2]} <br />
            Vipaka (Post Digestive Effect): {pharma[3]} <br />
            Prabhava (Special Effect): {pharma[4]} <br />
          </Typography>
        ) : null }
        {/* <Typography variant="body2" color="textSecondary" component="p" className={classes.title}>
          {post.caption}
        </Typography>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div> */}
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setMed("");
            setPharma([]);
            fetchPharmacologicalProperties(medicine.Name);
            setMed(medicine.Name);
          }}
        >
          View Pharmacological Properties
        </Button>
      </CardActions>
    </Card>
  );
};

export default Medicine;
