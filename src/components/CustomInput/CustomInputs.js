import React, { useState } from 'react';
import { Input, Select, Search } from 'semantic-ui-react';
import API from '../../utils/api';
import { UPLOAD_PRESET } from '../../config/config';

const equals = (a, b) => {
    if (a === b) return true;

    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();

    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b;

    if (a.prototype !== b.prototype) return false;

    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    return keys.every((k) => equals(a[k], b[k]));
};

export const StandardInput = ({ field, values, setValues, dataGroup }) => {
    const handleChange = (e, { value }) => {
        const items = { ...values };
        const item = { ...items[dataGroup] };
        item[field] = value;
        items[dataGroup] = item;
        setValues({ ...items });
    };

    const handleUpload = async (e) => {
        const userFolder = JSON.parse(localStorage.getItem('TRC-User')).email;
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', UPLOAD_PRESET);
        formData.append('folder', userFolder);

        const imageURL = await API.uploadImage(formData);

        const items = { ...values };
        const item = { ...items[dataGroup] };
        item[field] = imageURL.data.secure_url;
        items[dataGroup] = item;
        setValues({ ...items });
    };

    return (
        <>
            {['profilePicture', 'bgImageLink'].includes(field) ? (
                <Input
                    type="file"
                    id={field}
                    name={field}
                    onChange={handleUpload}
                />
            ) : (
                <Input
                    defaultValue={values[dataGroup][field] || ''}
                    onChange={handleChange}
                />
            )}
        </>
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
        const items = { ...values };
        const item = { ...items[dataGroup] };
        item[field] = value;
        items[dataGroup] = item;
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

export const RightLinkSearch = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    collection,
    position,
}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const handleSelect = (e, { result }) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position] };
        item[field] = result.title;
        if (field === 'name') {
            item.iconName = result.title;
        }
        items[dataGroup][group][position] = item;
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

export const RLGroupInput = ({
    field,
    data,
    values,
    setData,
    dataGroup,
    group,
    setFilter,
}) => {
    const prevGroupName = values[0].name;

    const handleChange = (e, { value }) => {
        const items = { ...data };
        const item = [...items[dataGroup][group]];
        const groupLinks = [...items[dataGroup].links];
        for (let i = 0; i < item.length; i += 1) {
            if (equals(item[i], values[0])) {
                item[i][field] = value;
            }
        }
        for (let i = 0; i < groupLinks.length; i += 1) {
            if (groupLinks[i].group.value === prevGroupName) {
                groupLinks[i].group.value = value;
            }
        }
        items[dataGroup][group] = item;
        items[dataGroup].links = groupLinks;
        setFilter(value);
        setData({ ...items });
    };

    return (
        <Input defaultValue={values[0][field] || ''} onChange={handleChange} />
    );
};

export const RLGroupSelectInput = ({
    field,
    values,
    setData,
    options,
    dataGroup,
    group,
    data,
}) => {
    const handleChange = (e, { value }) => {
        const items = { ...data };
        const item = [...items[dataGroup][group]];
        for (let i = 0; i < item.length; i += 1) {
            if (equals(item[i], values[0])) {
                item[i][field] = value;
            }
        }
        items[dataGroup][group] = item;
        // setFilter(value);
        setData({ ...items });
    };

    return (
        <Select
            options={options}
            defaultValue={values[0][field] || ''}
            onChange={handleChange}
        />
    );
};

export const SocialLinksStandardInput = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    position,
}) => {
    const handleChange = (e, { value }) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position] };
        item[field] = value;
        items[dataGroup][group][position] = item;
        setValues({ ...items });
    };

    return (
        <Input
            defaultValue={values[dataGroup][group][position][field] || ''}
            onChange={handleChange}
        />
    );
};

export const SocialLinksSelectInput = ({
    dataGroup,
    group,
    field,
    values,
    setValues,
    options,
    position,
}) => {
    const handleChange = (e, { value }) => {
        const items = { ...values };
        const item = { ...items[dataGroup][group][position] };
        item[field] = value;
        items[dataGroup][group][position] = item;
        setValues(items);
    };

    return (
        <Select
            options={options}
            defaultValue={values[dataGroup][group][position][field] || ''}
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
        const items = { ...values };
        const item = { ...items[dataGroup][group][position] };
        item[field].value = value;
        items[dataGroup][group][position] = item;
        setValues({ ...items });
    };

    return (
        <Input
            defaultValue={values[dataGroup][group][position][field].value || ''}
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
        const items = { ...values };
        const item = { ...items[dataGroup][group][position] };
        item[field].value = value;
        if (field === 'type') {
            if (value === 'internal') {
                item.internal.value = true;
            } else {
                item.internal.value = false;
            }
        }
        items[dataGroup][group][position] = item;
        setValues({ ...items });
    };

    return (
        <Select
            options={options}
            defaultValue={values[dataGroup][group][position][field].value || ''}
            onChange={handleChange}
        />
    );
};
