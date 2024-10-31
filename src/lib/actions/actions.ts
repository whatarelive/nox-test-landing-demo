'use server';

import axios from "axios";
import { ParsePost, Post, User } from "@/lib/interfaces/definitions";

const urlDataApi = 'https://jsonplaceholder.typicode.com';
const urlImgRandomApi = 'https://api.dicebear.com/9.x/avataaars/svg?seed='
const arrayImageCompany = ['ArtVenueLogo', 'ShellsLogo', 'SmartLogo', 'WavesLogo', 'ZoomerLogo'];

export async function getPosts(): Promise<ParsePost[]> {
    // ISR
    // const resPosts = await fetch(`${urlDataApi}/posts`, { next: { revalidate: 120 } });
    // const resUsers = await fetch(`${urlDataApi}/users`, { next: { revalidate: 120 } });
    // const postsArray = await resPosts.json() as Post[];
    // const userArray = await resUsers.json() as User[];

    // Static
    const resPosts = await axios.get<Post[]>(`${urlDataApi}/posts`);
    const resUsers = await axios.get<User[]>(`${urlDataApi}/users`);

    let user: User | undefined;
    const posts: ParsePost[] = [];

    for (const post of resPosts.data) {
        if ( post.id % 10 === 1 ) {
            user = resUsers.data.filter((user) => {
               if (user.id === post.userId) {
                   return {
                       id: user.id,
                       name: user.name,
                       companyName: user.company.name,
                   }
               }
            }).pop();

            if (!user) continue;

            const indexImage = ( user.id > 5 ) ? user.id - 6 : user.id - 1;

            posts.push({
                id: post.id,
                body: post.body,
                user: {
                    id: user.id,
                    name: user.name,
                    imgUrl: `${urlImgRandomApi}${user.name}`,
                    company: {
                        name: user.company.name,
                        logoUrl: `/svg/${arrayImageCompany[indexImage]}.svg`,
                    },
                },
            })
        }
    }

    return posts;
}