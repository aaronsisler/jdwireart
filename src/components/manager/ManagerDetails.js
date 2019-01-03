import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { convertAmount } from 'Tools/amount';
import UnlockPaypal from 'Paypal/UnlockPaypal';
import GalleryPieceImage from 'Gallery/GalleryPieceImage';
import GalleryPieceImageUpload from 'Gallery/GalleryPieceImageUpload';

export default class ManagerDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { galleryPiece } = this.props;
        if (!galleryPiece) {
            return (
                <div className="inbox_details_empty">
                    Please select an item to view
                </div>
            )
        }

        const { galleryPieceId, imageURL, isPaypalActive, name, price } = galleryPiece;
        return (
            <div className="inbox_details" >
                <div className="inbox_details_header">
                    <div>
                        <div className="inbox_details_header__name">
                            {name}
                        </div>
                        <div className="inbox_details_header__price">
                            ${convertAmount(price)}
                        </div>
                    </div>
                    <UnlockPaypal galleryPieceId={galleryPieceId} isPaypalActive={isPaypalActive} />
                </div>
                <div className="inbox_details_content">
                    <div className="inbox_details_content__link">
                        <Link className="nav_link" to={`/manager_edit/${galleryPieceId}`}>Edit Gallery Piece</Link>
                    </div>
                    <div className="inbox_details_content__image">
                        <GalleryPieceImageUpload galleryPieceId={galleryPieceId} />
                        <br />
                        <GalleryPieceImage imageURL={imageURL} />
                    </div>
                </div>
            </div>
        );
    }
}

ManagerDetails.propTypes = {
    galleryPiece: PropTypes.object,
};

