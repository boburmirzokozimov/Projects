import styled from 'styled-components'
import { useEffect } from 'react';
import CustomSelect from './CustomSelect';
import { Search } from './Search';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    @media(min-width:767px){
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
`

const Controls = ({ onSearch, search, setSearch, region, setRegion }) => {

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue)
        //eslint-disable-next-line
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder='Filter by Region'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    )
};

export default Controls;
