interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

// another way to determine a React Function Component
// it is not strictly required, and will allow us to
// use React component properties
// allows us to have children
// <Children>These are children!</Children>
export const ChildAsFC: React.FC<ChildProps> = ({
    color,
    onClick,
    children,
}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};
