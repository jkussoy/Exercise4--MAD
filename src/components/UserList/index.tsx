import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const renderUserItem = ({ item }) => (
        <View>
            <Text>Name: {item.name}</Text>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Address: {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Website: {item.website}</Text>
            <Text>Company: {item.company.name}</Text>
        </View>
    );

    return (
        <View>
            <Text>Users List</Text>
            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


export default UserList;
