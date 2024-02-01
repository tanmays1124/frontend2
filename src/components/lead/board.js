import React, { useState, useEffect } from 'react';
import Profiles from './profiles';
import axios from 'axios';
import './board.css';

export default function Board() {
  const [userid, setUserid] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [difficulty, setDifficulty] = useState('Easy');
  const [domain, setDomain] = useState('All');
  const [showDomainSelection, setShowDomainSelection] = useState(false);

  useEffect(() => {
    const fetchedUserId = localStorage.getItem('userId');
    setUserid(fetchedUserId);

    fetchUserProfileData(fetchedUserId);
    fetchLeaderboardData(fetchedUserId);
  }, []);

  const fetchUserProfileData = (userId) => {
    axios
      .get(`http://127.0.0.1:8000/api/userprofile/${userId}`)
      .then((response) => {
        const userName = response.data.name || 'Unknown';
        setLeaderboard((prevLeaderboard) => prevLeaderboard.map((user) => ({ ...user, name: userName })));
      })
      .catch((error) => {
        console.error('Error fetching user profile data:', error);
      });
  };

  const fetchLeaderboardData = (userId) => {
    axios
      .get(`http://127.0.0.1:8000/api/questionhistoryget/?user_id=${userId}`)
      .then((response) => {
        const fetchedLeaderboard = response.data.map((item) => ({
          score: item.score,
          domain: item.domain,
          difficulty_level: item.difficulty_level,
        }));
        setLeaderboard(fetchedLeaderboard);

        // Automatically select the domain button based on the fetched domain
        if (fetchedLeaderboard.length > 0) {
          setDomain(fetchedLeaderboard[0].domain);
        }
      })
      .catch((error) => {
        console.error('Error fetching leaderboard data:', error);
      });
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    if (newDifficulty !== 'All') {
      setShowDomainSelection(true);
    } else {
      setShowDomainSelection(false);
      setDomain('All');
    }
  };

  const handleDomainChange = (newDomain) => {
    setDomain(newDomain);
    // Perform any other necessary actions related to domain selection
  };

  const filteredProfiles = leaderboard.map((profile) => {
    const selectedDifficulty = difficulty;
    const selectedDomain = domain;

    const maxScore =
      profile.score &&
      Math.max(
        profile.score[selectedDifficulty]?.[selectedDomain] || 0,
        profile.score['Medium']?.[selectedDomain] || 0,
        profile.score['Difficult']?.[selectedDomain] || 0
      );

    return {
      ...profile,
      selectedDifficulty,
      selectedDomain,
      maxScore,
    };
  }).filter((profile) => {
    const score = profile.maxScore;
    return difficulty === 'All' || score !== undefined;
  });

  return (
    <div className="container">
      <div className="sidebar">
        <h2>LEADERBOARD</h2>
        <br />
        <hr />
        <br />
        <h2>Select Difficulty:</h2>
        <div className="difficulty-buttons">
          <button onClick={() => handleDifficultyChange('Easy')}>Easy</button>
          <button onClick={() => handleDifficultyChange('Medium')}>Medium</button>
          <button onClick={() => handleDifficultyChange('Difficult')}>Difficult</button>
        </div>

        {showDomainSelection && (
          <>
            <h2>Select Domain:</h2>
            <div className="domain-buttons">
              {leaderboard.map((profile) => (
                <button key={profile.domain} onClick={() => handleDomainChange(profile.domain)}>
                  {profile.domain}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {(!showDomainSelection || domain !== 'All') && (
        <div className="board" style={{ textAlign: 'mid-center' }}>
          <h1 className='leaderboard'>LEADERBOARD</h1>
          <div>
            {domain !== 'All' && difficulty !== 'All' && (
              <h2>{`${difficulty} - ${domain}`}</h2>
            )}
            <Profiles Leaderboard={filteredProfiles} />
          </div>
        </div>
      )}
    </div>
  );
}
