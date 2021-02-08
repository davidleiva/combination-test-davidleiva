import Icon from '../Icon';
import { Box, Typography } from '@material-ui/core';

const CardTextItem = ({text,iconString,style,className}) => {
    return (
        <Box display="flex" p={1} style={style} className={className}>
            {iconString && (<Icon iconString={iconString} color={'rgba(0, 0, 0, 0.54)'}/>)}
            <Typography variant="body2" color="textSecondary" component="p">
                {text}
            </Typography>
        </Box>
    );
}
 
export default CardTextItem;