import React from 'react';
import { Input, Select } from 'semantic-ui-react';

export const StandardInput = ({ field, values, setValues }) => {
    const handleChange = (e, { value }) => {
        setValues({ ...values, [field]: value });
    };
    return (
        <Input
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            defaultValue={values[field] || ''}
            onChange={handleChange}
        />
    );
};

export const RightLinkStandardInput = ({ field, values, setValue }) => {
    return (
        <Input
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            defaultValue={values[field].value || ''}
        />
    );
};

export const SelectInput = ({ field, values, setValues, options }) => {
    const handleChange = (e, { value }) => {
        setValues({ ...values, [field]: value });
    };

    return (
        <Select
            // label={{ icon: 'asterisk', color: 'teal' }}
            // labelPosition="left corner"
            options={options}
            defaultValue={values[field] || ''}
            onChange={handleChange}
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
