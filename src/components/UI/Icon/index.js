import Icon from '@material-ui/core/Icon';

const IconUI = ({iconString,color}) => {
    return iconString ? <Icon style={{ marginRight: '8px', color: color}}>{iconString}</Icon> : null;
}
 
export default IconUI;
