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
