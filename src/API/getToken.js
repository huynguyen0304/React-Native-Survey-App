import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('accesstoken');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
        return '';
    }
};

export default getToken;