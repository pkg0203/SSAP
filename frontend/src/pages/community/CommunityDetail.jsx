import React, { useState, useEffect } from 'react';
import { useParams, Outlet} from 'react-router-dom';
import axios from 'axios';
import Card from '../../componenets/Card'
import './community.css';

const CommunityDetail = () => {
    const item = useLoaderData()
    const [stories, setStoryDetail] = useState([])
    const [recommended, setRecommended] = useState([])

    useEffect(() => {
        const fetchStoryDetail = async () => {
            try {
                const response = await axios.get(`http://13.125.129.225/ssap/community/${item.id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        const fetchRecommended = async () => {
            const response = await axios.get('http://13.125.129.225/ssap/recommended-items/')
            setRecommended(response.data)
        };

        fetchPost();
        fetchComments();
    }, [item.id]);

    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>제목</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <div className='bg-[#ffefcb] p-8 md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.img} alt="" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
                </picture>

                <div className='px-8'>
                    <h1 className='text-4xl mt-12 text-secondary'>{item.title}</h1>
                    <article>
                        <h2>{item.content}</h2>
                    </article>
                </div>

                <div className='comments-section'>
                    <h3 className='text-2xl mb-4'>Comments</h3>
                    {comments.map((comment) => (
                        <div key={comment.id} className='mb-4'>
                            <h4 className='text-xl'>{comment.user}</h4>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>

                <div className='recommended-section'>
                    <h3 className='text-2xl mb-4'>How about these tips?</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {recommended.map((rec) => (
                            <Card key={rec.id} item={rec} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
        // <div className="community-container">
        //     <main className="community-main">
        //         <div className="content-detail">
        //             <h2>{post.title}</h2>
        //             <div className="community-post">
        //                 <img src={post.profile_image} alt="Profile" className="community-profile-img" />
        //                 <div>
        //                     <h3>{post.author}</h3>
        //                     <p>{post.description}</p>
        //                 </div>
        //             </div>
        //             <p className="community-body-text">{post.body}</p>
        //         </div>
        //         <div className="comments-section">
        //             {comments.map((comment) => (
        //                 <div className="community-comment" key={comment.id}>
        //                     <img src={comment.profile_image} alt="Profile" className="community-profile-img" />
        //                     <div>
        //                         <h3>{comment.author}</h3>
        //                         <p>{comment.text}</p>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </main>
        // </div>
    );
};

export default CommunityDetail;


