import { useState, useEffect } from 'react';
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

/**
 * Custom hook to fetch and manage portfolio data
 * @returns {Object} { data, loading, error, refetch }
 */
export const usePortfolioData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_ENDPOINTS.PORTFOLIO_DATA);
      
      if (!response.ok) {
        throw new Error(ERROR_MESSAGES.DATA_LOAD_FAILED);
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error('Error loading portfolio data:', err);
      setError(err.message || ERROR_MESSAGES.GENERIC_ERROR);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
