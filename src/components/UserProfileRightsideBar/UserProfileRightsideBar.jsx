import { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom'

import css from './UserProfileRightsideBar.module.css'

import {reviewPage, photosPage, followersPage, recentlyviewedPage, bookmarksPage, blogpostsPage, orderhistoryPage, myaddressPage, favoriteordersPage, bookingsPage} from '../../helpers/constants'

import ImgSrc from '../../../public/images/proandproplus.jpg';

import UserReviewedCard from '../../utils/UserProfile/UserReviewedCard/UserReviewedCard'
import UserPhotosCard from '../../utils/UserProfile/UserPhotosCard/UserPhotosCard'
import RecentlyViewed from '../../utils/UserProfile/RecentlyViewed/RecentlyViewed'
import UserBookmarks from '../../utils/UserProfile/UserBookmarks/UserBookmarks'
import UserBlogPosts from '../../utils/UserProfile/UserBlogPosts/UserBlogPosts'
import OrderHistory from '../../utils/UserProfile/OnlineOrdering/OrderHistory/OrderHistory'
import UserFollowersCard from '../../utils/UserProfile/UserFollowersCard/UserFollowersCard'

let UserProfileRightsideBar = () => {

    let [currComp, setCurrComp] = useState(<h1>Some thing Went Wrong!</h1>);

    let {userId, hashId} = useParams(); 

    let data = [{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },
    {
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    },{
        imgSrc: ImgSrc,
        title: "Paradise Biryani",
        address: "Kukatpally, Hyd",
        stars: 5,
        days: 10,
        votes: 10,
        comments: 2,
        id: 123,
        userImg: ImgSrc,
        userId: userId,
    }]

    console.log(userId, hashId, "user and hash id");

   useEffect(() => {
    switch(hashId){
        case photosPage:
            setCurrComp(<UserPhotosCard hashId={hashId} />);
            break;
        case followersPage:
            setCurrComp(<UserFollowersCard hashId={hashId} userData={{following: 0, followers: 0}} />);
            break;
        case recentlyviewedPage:
            setCurrComp(<RecentlyViewed hashId={hashId} />);
            break;
        case bookmarksPage:
            setCurrComp(<UserBookmarks hashId={hashId} />);
            break;
        case blogpostsPage:
            setCurrComp(<UserBlogPosts hashId={hashId} />);
            break;
        case orderhistoryPage:
            setCurrComp(<OrderHistory hashId={hashId} />);
            break;
        case myaddressPage:
            setCurrComp(<h1>No myaddressPage!</h1>);
            break;
        case favoriteordersPage:
            setCurrComp(<h1>No PagavoriteordersPagee!</h1>);
            break;
        case bookingsPage:
            setCurrComp(<h1>No bookingsPage!</h1>);
            break;
        default:
            setCurrComp(data?.map((val, index) => {
                return <UserReviewedCard data={val} key={index}/>
            }))
    }
    console.log(hashId, photosPage)
   }, [hashId])
   

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Reviews</div>
            <div className={css.contectBox}>
                { currComp }
            </div>
        </div>
    </div>
}

export default UserProfileRightsideBar