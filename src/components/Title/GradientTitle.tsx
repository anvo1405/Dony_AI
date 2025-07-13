import { Box, Typography } from '@mui/material'

interface IGradientTitleProps {
  title?: string
}

const GradientTitle = ({ title = 'Title' }: IGradientTitleProps) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        width: 'fit-content',
        borderRadius: '9999px',
        background: 'linear-gradient(185deg, #88CC39, #00B899, #007A78)',
        paddingTop: '1px',
        paddingBottom: '2px'
      }}
    >
      <Box
        sx={{
          borderRadius: '9999px',
          backgroundColor: '#fff',
          px: 3,
          py: 1,
          mx: '1px',
          mb: '0.2px'
        }}
      >
        <Typography fontWeight={500}>{title}</Typography>
      </Box>
    </Box>
  )
}

export default GradientTitle
