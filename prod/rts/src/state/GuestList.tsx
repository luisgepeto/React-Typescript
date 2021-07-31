import { useState } from 'react';
import UserSearchAsClass from '../classes/UserSearch';
const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<{ name: string; age: number }[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, { name: name, age: 20 }]);
    };
    return (
        <div>
            <h3> Guest List</h3>
            <ul>
                {guests.map((g) => (
                    <li key={g.name}>
                        {g.name} {g.age}
                    </li>
                ))}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <UserSearchAsClass users={guests} />
        </div>
    );
};

export default GuestList;
