import { useState, useEffect } from 'react';
import { axiosInstance } from '../lib/api';

const useDataFetching = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
                setError(null);
            } catch (error) {
                setError(error);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useDataFetching;
