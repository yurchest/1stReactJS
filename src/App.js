import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {queries} from "@testing-library/react";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "aa", body: 'ddd'},
        {id: 2, title: "bb 2", body: 'ss'},
        {id: 3, title: "cc 3", body: 'gg'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log('Sorted')
        if(selectedSort) {
            return [...posts.sort((a , b) => a[selectedSort].localeCompare(b[selectedSort]))]
        }
        return posts;
    }

    const sortedPosts = getSortedPosts()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sorting"
                    option={[
                        {value: 'title', name: "by name"},
                        {value: 'body', name: "by body"},
                    ]}
                />
                
            </div>
            
            {posts.length
                ? <PostList remove={removePost} posts={sortedPosts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    No Posts
                </h1>
            }


        </div>
    );
}

export default App;
