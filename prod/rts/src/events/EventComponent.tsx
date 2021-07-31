import React from 'react';

const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };
    const onDragStart = (e: React.DragEvent<HTMLInputElement>) => {
        console.log('help me!');
    };
    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>
                Drag Me!
            </div>
        </div>
    );
};

export default EventComponent;
