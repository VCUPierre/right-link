import React from 'react';
import { Input, Select, Search } from 'semantic-ui-react';

export const RightLinkSearch = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    searchValue,
    setSearchValue,
    collection,
    position,
}) => {
    const handleChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const handleSelect = (e, { result }) => {
        let items = { ...values };
        let item = { ...items[dataGroup][group][position] };
        item[field] = result.title;
        if (field === 'name') {
            item['iconName'] = result.title;
        }
        items[dataGroup][group][position] = item;
        console.log('RLsearch items', items);
        setSearchValue(result.title);
        setValues({ ...items });
    };

    return (
        <Search
            aligned="left"
            onResultSelect={handleSelect}
            onSearchChange={handleChange}
            results={collection.filter((x) => x.title.includes(searchValue))}
            value={searchValue}
        />
    );
};

export const StandardInput = ({ field, values, setValues, dataGroup }) => {
    const handleChange = (e, { value }) => {
        let items = { ...values };
        let item = { ...items[dataGroup] };
        item[field] = value;
        items[dataGroup] = item;
        console.log('standard items', items);
        setValues({ ...items });
    };

    return (
        <Input
            defaultValue={values[dataGroup][field] || ''}
            onChange={handleChange}
        />
    );
};

export const RightLinkStandardInput = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    position,
}) => {
    const handleChange = (e, { value }) => {
        let items = { ...values };
        let item = { ...items[dataGroup][group][position] };
        item[field] = value;
        items[dataGroup][group][position] = item;
        console.log('RLstandard items', items);
        setValues({ ...items });
    };

    return (
        <Input
            defaultValue={values[dataGroup][group][position][field] || ''}
            onChange={handleChange}
        />
    );
};

export const SelectInput = ({
    field,
    values,
    setValues,
    options,
    dataGroup,
}) => {
    const handleChange = (e, { value }) => {
        let items = { ...values };
        let item = { ...items[dataGroup] };
        item[field] = value;
        items[dataGroup] = item;
        console.log('standard items', items);
        setValues({ ...items });
    };

    return (
        <Select
            options={options}
            defaultValue={values[dataGroup][field] || ''}
            onChange={handleChange}
        />
    );
};

export const RightLinkSelectInput = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    options,
    position,
}) => {
    const handleChange = (e, { value }) => {
        let items = { ...values };
        let item = { ...items[dataGroup][group][position] };
        item[field] = value;
        items[dataGroup][group][position] = item;
        console.log('RLselect items', items);
        setValues({ ...items });
    };

    return (
        <Select
            options={options}
            defaultValue={values[dataGroup][group][position][field] || ''}
            onChange={handleChange}
        />
    );
};
