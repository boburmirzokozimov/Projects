import styled from "styled-components";
import Select from 'react-select'

const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: state.isSelected ? 'var(--colors-text)' : 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    }
})`
    width: 200px;
    border-radius: var(--radii);
    font-famaily: var(--family);
    border: none;

    & > *{
        box-shadow: var(--shadow);
    }

    & input {
        padding-left: 0.25rem;
    }

    & > div[id] {
        background-color: var(--colors-ui-base);
    }

    & * {
        color: var(--colors-text) !important;
    }
`;

export default CustomSelect;