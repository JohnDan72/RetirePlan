import React from 'react';
import { Notification } from 'rsuite';

const Message = ({ type, header, message, ...rest }) => {
    return (
        <Notification  {...rest} type={type} header={header}>
            {message}
        </Notification>
    );
}

export default Message;