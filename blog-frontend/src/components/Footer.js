import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from "styled-components";

const Container = styled.div`     
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #666;
    color: #fff;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; //방향 수직으로
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex; //수평으로 만듬
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 0.5;
  padding: 20px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>테코몽 블로그</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon  />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>홈</ListItem>
          <ListItem>주소</ListItem>
          <ListItem>이메일</ListItem>
          <ListItem>연락처</ListItem>
          <ListItem>지원</ListItem>
          <ListItem>채용</ListItem>
          <ListItem>취업</ListItem>
          <ListItem>나이</ListItem>
          <ListItem>키</ListItem>
          <ListItem>학교</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South KOREA 98336
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{marginRight:"10px"}}/>  010-1234-5678
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight:"10px"}} /> ghkstn7523@naver.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;