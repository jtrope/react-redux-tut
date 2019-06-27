import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" text="Nice blog post!" avatarSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00am" text="I like chicken" avatarSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" text="I like liver" avatarSrc={faker.image.avatar()} />
            </ApprovalCard>

        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));
