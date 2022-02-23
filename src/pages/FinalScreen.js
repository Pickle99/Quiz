import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleScoreChange, handleAmountChange } from '../redux/actions';

const FinalScreen = () => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate('/');
  };

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight='bold' mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBack} variant='outlined'>
        back to settings
      </Button>
    </Box>
  );
};

export default FinalScreen;
