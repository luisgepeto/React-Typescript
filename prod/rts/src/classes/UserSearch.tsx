import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearchAsClass extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined,
    };

    onClick = () => {
        const found = this.props.users.find((u) => {
            return u.name === this.state.name;
        });
        this.setState({ user: found });
    };

    render() {
        const { name, user } = this.state;

        return (
            <div>
                User Search
                <input
                    value={name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={this.onClick}>Search</button>
                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
            </div>
        );
    }
}

export default UserSearchAsClass;
