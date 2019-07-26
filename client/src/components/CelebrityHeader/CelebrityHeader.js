import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15
    },
    card: {
        maxWidth: 350
    },
    media: {
        maxHeight: 200,
        maxWidth: 200
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    },
    title: {
        color: theme.palette.primary.light
    },
    chip: {
        margin: '1px'
    }
}))

const CelebrityHeader = _ => {
    const [celebrityState, setCelebrityState] = useState({
        celebrity: {},
        birthday: '',
        renderCelebrity: _ => {
            axios.get(`https://api.themoviedb.org/3/person/${parseInt(localStorage.getItem('celebID'))}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`)
                .then(({ data }) => {
                    if (!data) {
                        celebrityState.renderCelebrity()
                    } else {
                        setCelebrityState({ ...celebrityState, celebrity: data, birthday: data.birthday })
                    }
                })
                .catch(e => console.log(e))
        }
    })

    const classes = useStyles()

    useEffect(_ => {
        celebrityState.renderCelebrity()
    })

    return (
        <div>
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        {
                            celebrityState.celebrity.profile_path ? <img className='movieImg' src={`https://image.tmdb.org/t/p/original${celebrityState.celebrity.profile_path}`} alt={celebrityState.celebrity.name} /> : <img className='movieImg' src={'http://wiki.bdtnrm.org.au/images/8/8d/Empty_profile.jpg'} alt={celebrityState.celebrity.name} />
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h5' component='h3' className="movieHeaderText">
                            {celebrityState.celebrity.name}
                        </Typography>
                        {
                            celebrityState.celebrity.birthday ?
                                <div className="celebHeaderText">
                                    <Typography component='p'>
                                        Born on: {`${celebrityState.celebrity.birthday.slice(5, 7)}-${celebrityState.celebrity.birthday.slice(8, 10)}-${celebrityState.celebrity.birthday.slice(0, 4)}`}
                                    </Typography>
                                </div> : null
                        }
                        <div className="celebHeaderText">
                            <Typography component='p' className="movieHeaderText">
                                {
                                    celebrityState.celebrity.place_of_birth ? `Birthplace: ${celebrityState.celebrity.place_of_birth}` : null
                                }
                            </Typography>
                        </div>
                        <div className="celebHeaderText">
                            <Typography className="movieHeaderText">
                                {
                                    celebrityState.celebrity.gender === 1 ? 'Gender: Female' : 'Gender: Male'
                                }
                            </Typography>
                        </div>
                    </Grid>
                    <Typography variant='h6' gutterBottom>
                        <strong>Biography</strong>
                    </Typography>
                    <Typography>
                        {celebrityState.celebrity.biography}
                    </Typography>
                </Grid>
            </Paper>
        </div>
    )
}

export default CelebrityHeader
