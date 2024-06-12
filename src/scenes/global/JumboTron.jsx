import { CardMedia, Typography } from "@mui/material"
import Teams from "../Teams/Teams"

export const JumboTron = () => (
    <>
        <CardMedia
        component="img"
        height="400"
        image="https://editorial.uefa.com/resources/028e-1b0958316c2a-a9cd801c499e-1000/format/wide1/real_madrid_v_fc_bayern_munchen_semi-final_second_leg_-_uefa_champions_league_2023_24.jpeg?imwidth=2048"
        alt="title"
      />
      <br />
      <Typography variant="h3" style={{ textAlign: 'center' }}>UEFA Champions League 2024</Typography>
      <Teams />
    </>
)