import { Box, Typography } from '@mui/material'
import React from 'react'
import { GradientTitle } from 'src/components'
import applicationsData from './applicationsData'

const ApplicationsSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, px: 20 }}>
      <GradientTitle title='Applications' />
      <Typography fontWeight={800} fontSize={32} textAlign={'center'}>
        Smart applications powered by AI
        <br />
        Built to think, learn, and evolve
      </Typography>
      <Typography textAlign={'center'} color='#8C8C8C'>
        From automation to personalization, our AI-powered applications are designed to solve real-world problems,
        <br />
        adapt to your needs, and continuously improve over time
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 8 }}>
        {applicationsData.map((applicationsItems) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#08090A0A',
              border: '1px',
              borderColor: '#08090A0D',
              borderRadius: 4,
              padding: 2,
              gap: 2
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor: 'black',
                color: 'white',
                fontWeight: 700,
                fontSize: 20,
                borderRadius: 4,
                paddingY: 2
              }}
            >
              {applicationsItems.groupName}
            </Box>
            {applicationsItems.groupItem.map((item) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                  padding: 2,
                  backgroundColor: 'white',
                  borderRadius: 2
                }}
              >
                <Box>
                  <Typography sx={{ color: '#ff4d00', fontWeight: 700 }}>{item.title}</Typography>
                  <Typography
                    sx={{
                      color: '#595959',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#1B2329', fontWeight: 700, mt: 2 }}>{item.result}</Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ApplicationsSection
