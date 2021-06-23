import axios from 'axios';

const userList = () => {
	setLoading(true);
	setTimeout(async () => {
		try {
			const response = await axios.get('https://reqres.in/api/users?page=2');
			console.log('response =>>>>', response.data.data);
			return response;
		} catch (err) {
			console.log('Api error', err);
			return err;
		}
	}, 1000);
};
