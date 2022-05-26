import {
  BtnCancel,
  BtnCheck,
  BtnSlide,
  Card,
  CardBtn,
  CardContainerContact,
  CardItem,
  CardText,
  ImageReview,
  InfoContact,
  ReviewCard,
  Title,
} from './style_cardContactItem'
import * as FaIcons from 'react-icons/fa'
function CardContactItem() {
  return (
    <CardContainerContact>
      <BtnSlide>
        <FaIcons.FaLongArrowAltRight />
      </BtnSlide>
      <Title>Latest Review by Customers</Title>
      <Card>
        <CardItem>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            officiis est repellat velit sapiente similique corporis odio
            consequatur at cum esse eos aliquid ad illum dolorem omnis sequi
            doloribus quidem.
          </CardText>
          <ReviewCard>
            <ImageReview></ImageReview>
            <InfoContact>
              <h1>Kusnadi Anderson</h1>
              <p>4m ago</p>
              <CardBtn>
                <BtnCheck>
                  <FaIcons.FaCheckCircle />
                </BtnCheck>
                <BtnCancel>
                  <FaIcons.FaTimesCircle />
                </BtnCancel>
              </CardBtn>
            </InfoContact>
          </ReviewCard>
        </CardItem>
        <CardItem>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            officiis est repellat velit sapiente similique corporis odio
            consequatur at cum esse eos aliquid ad illum dolorem omnis sequi
            doloribus quidem.
          </CardText>
          <ReviewCard>
            <ImageReview></ImageReview>
            <InfoContact>
              <h1>Kusnadi Anderson</h1>
              <p>4m ago</p>
              <CardBtn>
                <BtnCheck>
                  <FaIcons.FaCheckCircle />
                </BtnCheck>
                <BtnCancel>
                  <FaIcons.FaTimesCircle />
                </BtnCancel>
              </CardBtn>
            </InfoContact>
          </ReviewCard>
        </CardItem>
        <CardItem>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            officiis est repellat velit sapiente similique corporis odio
            consequatur at cum esse eos aliquid ad illum dolorem omnis sequi
            doloribus quidem.
          </CardText>
          <ReviewCard>
            <ImageReview></ImageReview>
            <InfoContact>
              <h1>Kusnadi Anderson</h1>
              <p>4m ago</p>
              <CardBtn>
                <BtnCheck>
                  <FaIcons.FaCheckCircle />
                </BtnCheck>
                <BtnCancel>
                  <FaIcons.FaTimesCircle />
                </BtnCancel>
              </CardBtn>
            </InfoContact>
          </ReviewCard>
        </CardItem>
      </Card>
    </CardContainerContact>
  )
}

export default CardContactItem
