import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Controls from '../components/Controls';

import List from '../components/List';
import Card from '../components/Card';
import { ALL_COUNTRIES } from '../config';

export const HomePage = ({ countries, setCountries, search, setSearch, region, setRegion }) => {

    const [filteredCountries, setFilteredCountries] = useState(countries)

    const navigate = useNavigate()

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(((c) => c.region === region))
        }

        if (search) {
            data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
        }

        return setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES)
        .then(res => setCountries(res.data))
        .then(console.log(countries))
        .catch(err => console.log(err))
        handleSearch();
    }, [countries])

    return <>
        <Controls onSearch={handleSearch} search={search} setSearch={setSearch} region={region} setRegion={setRegion} />
        <List>
            {filteredCountries.map((c) => {
                const countryInfo = {
                    img: c.flags.png,
                    name: c.name,
                    info: [
                        {
                            title: 'Population',
                            description: c.population.toLocaleString()
                        },
                        {
                            title: 'Region',
                            description: c.region
                        },
                        {
                            title: 'Capital',
                            description: c.capital
                        }
                    ]
                }
                return <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
            })
            }
        </List>
    </>;
};

