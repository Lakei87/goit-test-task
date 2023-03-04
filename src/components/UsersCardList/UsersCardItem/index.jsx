import { numberWithCommas } from "helpers/numberWithCommas";

import logo from "images/logo.png";
import avatarDefault from "images/Hansel.png"

import {
  UserCard,
  Title,
  Logo,
  AvatarBox,
  AvatarWrapp,
  Avatar,
  TextTweets,
  TextFollowers,
  ButtonInactive,
  ButtonActive
} from "./UsersCardItem.styled";

export default function UsersCardItem({ userData, isFollowing, setFollowingList, followingList }) {

  const subscribes = () => {
    const followingCardsId = [];

    if (!followingList) {
      followingCardsId.push(userData.id)
      localStorage.setItem('followingCardsId', JSON.stringify(followingCardsId));
      setFollowingList(followingCardsId)
    }
    
    if (followingList) {
      const newFollowingList = [...followingList, userData.id]
      localStorage.setItem('followingCardsId', JSON.stringify(newFollowingList));
      setFollowingList(newFollowingList)
    }
  };

  const unsubscribes = () => {
    const newFollowingList = followingList.filter(item => item !== userData.id)
    localStorage.setItem('followingCardsId', JSON.stringify(newFollowingList))
    setFollowingList(newFollowingList)
  }

  return (
    <UserCard>
      <Title title="user card"/>
      <Logo src={logo} alt='logo'/>
      <AvatarBox>
        <AvatarWrapp>
          <Avatar src={userData.avatar ? userData.avatar : avatarDefault} alt='avatar'/>
        </AvatarWrapp>
      </AvatarBox>
      <TextTweets>{numberWithCommas(userData.tweets)} tweets</TextTweets>
      <TextFollowers>{isFollowing ? numberWithCommas(userData.followers + 1) : numberWithCommas(userData.followers)} followers</TextFollowers>
      {isFollowing && <ButtonActive onClick={unsubscribes}>following</ButtonActive>}
      {!isFollowing && <ButtonInactive onClick={subscribes}>follow</ButtonInactive>}
    </UserCard>
  )
};
