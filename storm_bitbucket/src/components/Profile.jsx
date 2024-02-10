import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);
  const [displayCountCon, setDisplayCountCon] = useState(6);


  useEffect(() => {
    let data = JSON.stringify({
      "username": "string",
      "token": "string"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://spit-hackthn.vercel.app/fetch-user-data-fromdbs/',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const arr = userData.repositories
  const arr1 = userData.contributions

  console.log(arr1)
  const rep = Array.isArray(arr) ? arr : [];
  const rep1 = Array.isArray(arr1) ? arr1 : [];


  const handleViewMore = () => {
    // Increase the display count by 6
    setDisplayCount(displayCount + 6);
  };

  const handleViewMoreCon = () => {
    // Increase the display count by 6
    setDisplayCountCon(displayCountCon + 6);
  };

  return (
    <Flex>
    <div className="profile-container">
      <Box m='10%'>
      <Heading size={'md'} mb='3%'>Repositories:</Heading>
      <ul className="repo-list">
        {/* Map over the user data to display repositories */}
        {rep?.slice(0, displayCount).map((repo) => (
          <li size={'md'} key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <Button bgColor={'black'} color={'white'} m='auto' onClick={handleViewMore}>View More</Button>
      </Box>
    </div>
    <div className="profile-container">
      <Box m='2%'>
      <h2>Contributions:</h2>
      <ul className="repo-list">
        {/* Map over the user data to display repositories */}
        {rep1?.map((repo) => (
          <Heading size={'md'} key={repo.id}>{repo.name}</Heading>
        ))}
      </ul>

      <button className="view-more-btn" onClick={handleViewMoreCon}>View More</button>
      </Box>
    </div>
    </Flex>
  );
};

export default Profile;
