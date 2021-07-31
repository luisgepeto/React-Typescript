import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log('clicked')}>
            <Child color="blue" onClick={() => console.log('clicked')} />
        </ChildAsFC>
    );
};

export default Parent;
