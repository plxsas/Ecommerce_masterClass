import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    get_items,
    get_total,
    get_item_total,
} from '../actions/cart';
import { list_orders } from '../actions/orders';


const Dashboard = ({
    orders,
    list_orders,
    get_items,
    get_total,
    get_item_total,
    user,
}) => {

    useEffect(() => {
        list_orders();
        get_items();
        get_total();
        get_item_total();
    }, []);

    const userInfo = () => {
        return (
            <div className='card mb-5'>
                <h3 className='card-header'>User Information</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <strong>First Name:</strong>
                        {
                            user &&
                            user !== null &&
                            user !== undefined ?
                            user.first_name : <Fragment></Fragment>
                        }
                    </li>
                </ul>
            </div>
        );
    };

    const renderData = () => {
        return (
            <Fragment>
                {userInfo()}
            </Fragment>
        );
    };


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-3'>

                </div>
                <div className='col-9'>
                    {renderData()}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    orders: state.orders.orders,
    user: state.auth.user,
});

export default connect(mapStateToProps, {
    get_items,
    get_total,
    get_item_total,
    list_orders
})(Dashboard);