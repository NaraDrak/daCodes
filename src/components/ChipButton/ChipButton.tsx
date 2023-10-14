import { Chip } from "@mui/material";

const ChipButton = () => {
  return (
        <Chip label="Clic here"
        style={{
        backgroundColor: '#5141EA',
        borderRadius: '20px',
        color: 'white',
        padding: '10px 30px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }} />
  );
};

export default ChipButton