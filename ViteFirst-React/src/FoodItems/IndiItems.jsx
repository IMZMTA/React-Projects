import PropTypes from 'prop-types';
import sty from './IndiItems.module.css'

const IndiItems = ({foodItem,bought,handleBuyButton}) => {

    return ( 
        <li className={`list-group-item ${bought && sty.active} ${sty['im-item']}`}>
            <span className={sty.sp}>{foodItem}</span>
            <button className={`${sty.btton} btn btn-secondary`} onClick={handleBuyButton}>Buy</button>
        </li>
    );
};

IndiItems.propTypes = {
    foodItem: PropTypes.any.isRequired,
    };

export default IndiItems;