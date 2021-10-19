declare namespace Mutation {
	namespace EditUser {
		interface Response {
			editUser?: boolean;
		}

		interface Variables {
			input: {
				id: string
				firstName: string;
				lastName: string;
			}
		}
	}
}
