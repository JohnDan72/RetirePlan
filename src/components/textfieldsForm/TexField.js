import React from 'react';
import { Form, InputGroup, TagInput } from 'rsuite';



const TextField = ({ name, label, accepter, helpBlock, prefix, posfix, ...rest }) => {
    return (
        <Form.Group>
            {prefix ? (
                <>
                    <Form.ControlLabel>{label}</Form.ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon>{prefix}</InputGroup.Addon>
                        <Form.Control name={name} accepter={accepter} {...rest} />
                        <Form.HelpText>{helpBlock}</Form.HelpText>
                    </InputGroup>
                </>
            ) : (<>
                {
                    posfix ? (
                        <>
                            <Form.ControlLabel>{label}</Form.ControlLabel>
                            <InputGroup>
                                <Form.Control name={name} accepter={accepter} {...rest} />
                                <InputGroup.Addon>{posfix}</InputGroup.Addon>
                                <Form.HelpText>{helpBlock}</Form.HelpText>
                            </InputGroup>
                        </>
                    ) : (
                        <>
                            <Form.ControlLabel>{label}</Form.ControlLabel>
                            <Form.Control name={name} accepter={accepter} {...rest} />
                            <Form.HelpText>{helpBlock}</Form.HelpText>
                        </>
                    )
                }
            </>
            )}

        </Form.Group >
    )
}

const TagTextField = ({ name, label, accepter, helpBlock, prefix, posfix, ...rest }) => {
    return (
        <Form.Group>
            <Form.ControlLabel>{label}</Form.ControlLabel>
            <TagInput
                className='w-100'
                name={name} {...rest}
            />
            <Form.HelpText>{helpBlock}</Form.HelpText>
        </Form.Group >
    )
}

export {
    TextField,
    TagTextField
};