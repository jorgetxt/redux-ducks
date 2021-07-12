import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TableCard from './TableCard/TableCard'
import useStyles from "./Styles"
import Card from './Cards/Card'

function Cards() {
  const classes = useStyles();
    return (
      
        <Fragment>
          <Grid container spacing={3}>
              
            <Grid item xs={12} sm={6}>
              <TableCard></TableCard>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card></Card>
              
            </Grid>

          </Grid>
          
            <Typography paragraph>
          CartasCartasCartasCartasCartas CartasCartasCartasCartasCartas CartasCartasCartasCartasCartas
        </Typography>
        <Typography paragraph>
          
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Fragment>
    )
}

export default Cards
