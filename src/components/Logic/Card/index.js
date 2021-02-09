// React 
import { useState, useEffect } from 'react';

// Material UI
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    CardActions, 
    IconButton,
    Box
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert'

// custom components
import Avatar from '../../UI/Avatar';
import CardTextItem from '../../UI/CardTextItem';
import CommentsSummary from '../../UI/CommentsSummary';

// utils
import PropTypes from 'prop-types';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';

// assets 
import headerbackground from '../../assets/header.png';

const useStyles = makeStyles(() => ({
    media: {
        backgroundColor: '#ececec',
        paddingTop: '33.33%',
    }
}));

const CardUI = ({data}) => {
    const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis malesuada nunc, nec elementum lectus vehicula at. Sed a tristique mi, non cursus magna. Duis auctor rutrum velit, eget tincidunt leo tincidunt tempus. Cras arcu dolor, fringilla in sapien laoreet, eleifend efficitur lacus. Vestibulum mattis aliquam porta.'

    const fullName = data && data.name ? `${data.name.title} ${data.name.first} ${data.name.last}` : '';    
    const address = data && data.location ? `${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.country}`: null;
    
    const [registeredDate, setRegisteredDate] = useState('');
    const getRegisteredDate = (date) => {
        const month = date.getMonth() + 1;
        return <span className="is-uppercase" key="2"><small>{date.getDate() + "/" + month + "/" + date.getFullYear()}</small></span>
    };

    useEffect(() => {
        const myDate = data && data.registered ? data.registered.date : null;
        setRegisteredDate(myDate ? getRegisteredDate(new Date(myDate)) : '');
    }, [data])
    
    const classes = useStyles();

    return (
        <Card className="Card">
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={headerbackground}
                    title="header background image"
                >
                </CardMedia>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="user avatar"
                            alt={fullName}
                            src={data && data.picture ? data.picture.thumbnail : null}
                        >
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<h3 style={{margin: '0'}}>{fullName}</h3>}
                    subheader={[<span className="is-uppercase" key={'1'}><small>Registered at: </small></span>, registeredDate]}
                ></CardHeader>

                <div style={{
                    padding: '10px'
                }}>
                    <Box display="flex" className="wrap nowrap-md">
                        <CardTextItem text={paragraph}  />
                    </Box>
                    <Box display="flex" className="wrap nowrap-md">
                        <CardTextItem text={data.email} iconString={'email'} className="col-6-md"/>
                        <CardTextItem text={data.phone} iconString={'phone'} className="col-6-md"/>
                    </Box>
                    <Box display="flex" className="wrap nowrap-md">
                        <CardTextItem text={data && data.dob ? `${data.dob.age} years` : ''} iconString={'today'} className="col-6-md"/>
                        <CardTextItem text={data.gender} iconString={data.gender === 'male' ? 'male' : 'female'} className="col-6-md"/>
                    </Box>
                    <Box display="flex" className="wrap nowrap-md">
                        <CardTextItem text={address} iconString={'map'} />
                    </Box>
                </div>
                <CardActions disableSpacing>
                    <IconButton aria-label="like this post" onClick={() => console.log('CLICK')}>
                        <span className="material-icons">thumb_up</span>
                    </IconButton>
                    <IconButton aria-label="add to favorites" onClick={() => console.log('CLICK')}>
                        <span className="material-icons">favorite</span>
                    </IconButton>
                    <IconButton aria-label="share" onClick={() => console.log('CLICK')}>
                        <span className="material-icons">share</span>
                    </IconButton>
                    <CommentsSummary onClick={() => console.log('CLICK')}/>
                </CardActions>
            </CardContent>
        </Card>
    );
}
 
CardUI.propTypes= {
    data: PropTypes.shape({
        dob: PropTypes.shape({
            age: PropTypes.number,
        }),
        email: PropTypes.string,
        gender: PropTypes.string,
        name: PropTypes.shape({
            title: PropTypes.string,
            first: PropTypes.string,
            last: PropTypes.string,
        }),
        nat: PropTypes.string,
        phone: PropTypes.string,
        picture: PropTypes.shape({
            thumbnail: PropTypes.string,
        })
    })
}

CardUI.defaultProps= {
    data: {
        dob: {
            age: '',
        },
        email: '',
        gender: '',
        name: {
            title: '',
            first: '',
            last: '',
        },
        nat: '',
        phone: '',
        picture: {
            thumbnail: '',
        }
    }
}

export default CardUI;