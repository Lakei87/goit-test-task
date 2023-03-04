import styled from "styled-components";

import bcgImg from "images/background.png";

export const UserCard = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    padding-bottom: 36px;

    background: url(${bcgImg}) no-repeat left 36px top 28px , linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`;

export const Title = styled.h3`
    visibility: hidden;
`;

export const Logo = styled.img`
    position: absolute;
    left: 20px;
    top: 20px;
`;

export const AvatarBox = styled.div`
    position: relative;
    margin-top: 214px;
    width: 100%;
    height: 8px;

    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const AvatarWrapp = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    border-radius: 50%;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

    transform: translate(-50%, -50%);
`;

export const Avatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #5736A3;
`;

export const TextTweets = styled.p`
    margin-top: 62px;

    color: #EBD8FF;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 500;
    font-family: 'Montserrat';
    text-transform: uppercase;
`;

export const TextFollowers = styled(TextTweets)`
    margin-top: 16px;
`;

export const ButtonInactive = styled.button`
    margin-top: 26px;
    padding: 14px 20px;
    width: 196px;
    height: 50px;

    color: #373737;
    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 600;
    font-family: 'Montserrat';
    text-transform: uppercase;

    cursor: pointer;
`;

export const ButtonActive = styled(ButtonInactive)`
    background-color: #5CD3A8;
`;