import React from 'react';
import { Input, Select } from 'semantic-ui-react';

export const StandardInput = ({ field, values, setValue }) => {
    return (
        <Input
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            defaultValue={values[field] || ''}
        />
    );
};

export const RightLinkStandardInput = ({ field, values, setValue }) => {
    console.log('field', field, 'value', values);
    return (
        <Input
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            defaultValue={values[field].value || ''}
        />
    );
};

export const SelectInput = ({ field, values, setValue, options }) => {
    return (
        <Select
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            options={options}
            defaultValue={values[field] || ''}
        />
    );
};

export const RightLinkSelectInput = ({ field, values, setValue, options }) => {
    return (
        <Select
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            options={options}
            defaultValue={values[field].value || ''}
        />
    );
};
