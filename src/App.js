import { Grid, Typography, Box } from '@material-ui/core';
import { default as UserCard } from './components/Logic/Card';

import useLoggedUser from './hooks/useLoggedUser';

function App() {
  const loggedUser = useLoggedUser();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{height: '100vh'}}
    > 
      <Box m={2}>
        <Typography>This is just a Card Example:</Typography>
      </Box>
      <Box m={4}>
        <UserCard data={loggedUser} />
      </Box>
      <Typography m={2}>Please, take a closer look into StoryBook</Typography>
      <Typography m={2}><code>npm run storybook</code></Typography>
    </Grid>
  );
}

export default App;
