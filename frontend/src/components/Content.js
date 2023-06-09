import { Grid } from '@material-ui/core'
import React from 'react'
import BodyCard from './BodyCard'
import BodyCard2 from './BodyCard2'

const cardContents = [
    {
        title: "タイトル1",
        subheader: "サブヘッダー1",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル2",
        subheader: "サブヘッダー2",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル3",
        subheader: "サブヘッダー3",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル4",
        subheader: "サブヘッダー4",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
]

const cardContents2 =[         
    {

        text: "クッキー",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    },
    {

        text: "クッキー",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    },

    {
    
        text: "3hahahahaha",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    }
]

function Content() {
    const getCardContent2 = getObj => {
        return (
            <Grid item xs={12} sm={4}>
                <BodyCard2 {...getObj} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {cardContents2.map(contentObj => getCardContent2(contentObj))}
        </Grid>
    )
}

export default Content
