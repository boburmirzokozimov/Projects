import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountries } from "../config";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Info } from "../components/Info"

export const Detail = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(searchByCountries(name))
            .then(({ data }) => setCountry(data[0]))
            .catch(err => console.log(err))
    }, [name])


    return <div>
        <Button onClick={() => navigate(-1)}>
            <IoArrowBack />Back
        </Button>
        {country && <Info {...country} />}
    </div>;
};

