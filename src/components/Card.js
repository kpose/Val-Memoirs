import React from 'react';
import PropTypes from 'prop-types';


import AuthorRow from './AuthorRow';

class Card extends React.Component{
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: PropTypes.node.isRequired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func,
        };

        static defaultProps = {
            linkText: '',
            onPressLinkText: () => {},
            };
            render() {
                const { fullname, image, linkText, onPressLinkText } = this.props;
                return (
                    <div>
                        <AuthorRow
                            fullname={fullname}
                            linkText={linkText}
                            onPressLinkText={onPressLinkText}
                        />
                        <img style={imageStyle} src={image} alt="hy"/>
                        </div>
               );
            }  
}

const imageStyle = {
    border: '1px solid #e6e6e6',
    backgroundColor: 'red',
    borderRadius: '30px',
    marginBottom: '60px',
    marginLeft: '50px',
    marginRight: '500px'

  
 }



export default Card;