import React, { useState, useEffect } from 'react';
import { CircularProgress, CircularProgressLabel, Box, Flex, Button } from '@chakra-ui/react';

const MindfulSection = () => {
  const [countdown, setCountdown] = useState(300); // Initial countdown value
  const [timerStarted, setTimerStarted] = useState(false);
  const videoURL = '/purple-live-wallpaper.mp4'; // Path to your video in the public directory

  useEffect(() => {
    if (timerStarted) {
      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdown, timerStarted]);

  const handleStartTimer = () => {
    setTimerStarted(true);
  };

  const handleRestartTimer = () => {
    setTimerStarted(false);
    setCountdown(10); // Reset the countdown to its initial value
  };

  return (
    <Box position="relative" h="100vh">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={videoURL} type="video/mp4" />
      </video>
      <Flex
        position="absolute"
        inset={0}
        align="center"
        justify="center"
        direction="column"
        fontSize="5xl"
        color="white"
      >
        {countdown > 0 ? (
          timerStarted ? (
            <div>
              <CircularProgress
                value={(countdown / 10) * 100} // Adjust value for the circular timer
                size="200px"
                thickness="10px"
                color="green.500"
              >
                <CircularProgressLabel>{`${countdown}s`}</CircularProgressLabel>
              </CircularProgress>
              <Button onClick={handleRestartTimer} size="lg" colorScheme="red" mt={4}>
                Restart
              </Button>
            </div>
          ) : (
            <Button onClick={handleStartTimer} size="lg" colorScheme="green">
              Start
            </Button>
          )
        ) : (
          <div>
            <CircularProgress
              value={100}
              size="200px"
              thickness="10px"
              color="green.500"
            >
              <CircularProgressLabel>0s</CircularProgressLabel>
            </CircularProgress>
            <Button onClick={handleRestartTimer} size="md" colorScheme="light red" mt={4} justifyItems={'center'}>
              Restart
            </Button>
          </div>
        )}
      </Flex>
    </Box>
  );
};

export default MindfulSection;