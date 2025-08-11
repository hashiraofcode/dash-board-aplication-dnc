import { Box, Avatar } from '@mui/material'
import { TitleH2, StyledSpan } from '@/styles'
import { type ListDataProps } from '@/types'

const AvatarList = (props: { people?: ListDataProps[] }) => {
  return props.people ? (
    <>
      {props.people.map((item, index) => {
        return (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              padding: '1.2rem 0',
              key: { index },
            }}
          >
            <Box>
              <Avatar
                src={item.avatar}
                alt={item.name}
                sx={{
                  width: '4.8rem',
                  height: '4.8rem',
                  marginRight: '1.6rem',
                }}
              />
            </Box>
            <Box>
              <TitleH2 typographieProps={{}}>{item.name}</TitleH2>
              <StyledSpan typographieProps={{}}>{item.subtitle}</StyledSpan>
            </Box>
          </Box>
        )
      })}
    </>
  ) : (
    <p>Error: 404, data not found </p>
  )
}

export default AvatarList
