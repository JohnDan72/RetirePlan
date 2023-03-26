import React from 'react';
import { Notification } from 'rsuite';

const Message = ({ type, header, message, ...rest }) => {
    return (
        <Notification className='w-100'  {...rest} type={type} header={header}>
            <h5 className='w-100'>{message}</h5>
        </Notification>
    );
}

export default Message;