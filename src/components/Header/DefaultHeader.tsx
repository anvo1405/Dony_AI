import { Box, Container, Link, Typography } from '@mui/material'
import { ROUTE_PATHS } from 'src/config/Routes/routes'

const DefaultHeader = () => {
  const nav_link = [
    { label: 'Home', link: ROUTE_PATHS.HOME },
    { label: 'Strategy', link: ROUTE_PATHS.HOME },
    { label: 'Product', link: ROUTE_PATHS.HOME },
    { label: 'Contact', link: ROUTE_PATHS.HOME },
    { label: 'Career', link: ROUTE_PATHS.HOME }
  ]

  return (
    <Box
      component='header'
      display='flex'
      alignItems='center'
      justifyContent='space-around'
      borderBottom={1}
      borderColor={'#E3E8EF'}
      sx={{
        py: '25px'
      }}
    >
      <Typography>Dony AI</Typography>
      <Box display='flex' gap={5}>
        {nav_link.map((item) => (
          <Link href={item.link} underline='hover' color='inherit'>
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default DefaultHeader
