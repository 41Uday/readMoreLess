import {useState} from 'react'

import {BgContainer, Heading, Para, Img, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isStatus, setIsStatus] = useState(false)
  const onClickLessValue = () => {
    setIsStatus(prevState => !prevState)
  }
  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {isStatus ? (
        <>
          <Para>{reactHooksDescription}</Para>
          <Button type="button" onClick={onClickLessValue}>
            Read Less
          </Button>
        </>
      ) : (
        <>
          <Para>{reactHooksDescription.slice(0, 171)}</Para>
          <Button type="button" onClick={onClickLessValue}>
            Read More
          </Button>
        </>
      )}
    </BgContainer>
  )
}

export default ReadMore
