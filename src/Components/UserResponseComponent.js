import { useParams } from 'react-router-dom';

function UserResponseComponent() {
    let { userEmail } = useParams();
    userEmail = decodeURIComponent(userEmail);

    // Use userEmail to fetch or retrieve that user's form responses
    // and display them on this component

    return (
        <div>
            <h1>Responses for {userEmail}</h1>
            {/* Display the user's answers here... */}
        </div>
    );
}
export default UserResponseComponent;