import { useState } from "react"

import UsersCardItem from "./UsersCardItem"

import data from "data/users.json"

import { CardListSection, Title } from "./UsersCardList.styled"
import { Container } from "components/common/Container.styled"

export default function UsersCardList() {
    const [followingList, SetFollowingList] = useState(JSON.parse(localStorage.getItem('followingCardsId')));
    let isFollowing = false;

    return (
        <CardListSection>
            <Title title="users card list"/>
            <Container>
                {!followingList && data.users.map(user =>
                    <UsersCardItem
                        key={user.id}
                        userData={user}
                        isFollowing={isFollowing}
                        setFollowingList={SetFollowingList} />)}
                
                {followingList && data.users.map(user => {
                    const index = followingList.indexOf(user.id);

                    if (index > -1) {
                        isFollowing = true;
                    } else isFollowing = false

                    return (
                        <UsersCardItem
                            key={user.id}
                            userData={user}
                            isFollowing={isFollowing}
                            setFollowingList={SetFollowingList}
                            followingList={followingList} />)
                })}
            </Container>
        </CardListSection>
    )
};
