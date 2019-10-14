import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const User = {
    index() {
        const QUERY = gql`{ users { id name email }}`;
        const { data, error, loading } = useQuery(QUERY);

        return { data, error, loading };
    },
    show() {
        const QUERY = gql`{ showProfile { id name email }}`;
        const { data, error, loading } = useQuery(QUERY);

        return { data, error, loading };
    }
};

export default User;