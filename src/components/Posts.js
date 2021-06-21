import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Post from './Post'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#f5f9fc',
    height: '85%'
  }
}))

const Posts = ({ posts }) => {
  const classes = useStyles()

  return (
    <div className='posts'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Paper className={classes.paper}>
                <Post id={post.id} title={post.title} body={post.body} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Posts
