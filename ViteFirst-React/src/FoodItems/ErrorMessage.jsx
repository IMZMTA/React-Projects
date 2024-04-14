import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({item}) => {

    // let foodItems = [];

    return (
    <>
        { item.length === 0 && <h3>I am still hungry</h3> }
    </>
    )
}

ErrorMessage.propTypes = {
    item: PropTypes.array.isRequired,
};

export default ErrorMessage;
