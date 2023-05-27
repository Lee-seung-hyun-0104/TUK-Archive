import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './component/Header';
import Sort from './component/Sort';
import UserProfile from './component/UserProfile';
import Button from './component/Button';
import IconButton from './component/IconButton'
import CardItem from './component/CardItem';
import CardList from './component/CardList';
import Filters from './component/Filters';
import SearchBar from './component/SearchBar';

import Linkicon from './icon/Link'
import Editsomeicon from './icon/Editsome'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Sort />
        <UserProfile
            image={"https://i.ytimg.com/vi/0VY30MMiUdA/maxresdefault.jpg"}
            userName={"아이"}
            email={"Aiaiaiai@gmail.com"}
            postNumber={"23"}
            likeNumber={"48"}
        />
        <Button
            title={"button"}
            type={"blueFill"}
            size={"buttonMedium"}
            icon={<Linkicon />}
        />
        <IconButton
            title={"button"}
            type={"blueFill"}
            size={"iconbuttonMedium"}
            icon={<Editsomeicon />}
        />

        {/* CSS손보기 */}
        <CardItem
            image={""}
            subject={"웹어플리케이션 응용"}
            userName={"이승현"}
            title={"미니블로그"}
            like={17}
        />

        <CardList/>

        <Filters/>

        <SearchBar/>

    </div>
);