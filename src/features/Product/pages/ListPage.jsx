import { Box, Container, Grid, Paper } from '@mui/material';

function ListPage() {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: '250px' }}>
            <Paper elevation={0}>left colum</Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Paper elevation={0}>right colum</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
