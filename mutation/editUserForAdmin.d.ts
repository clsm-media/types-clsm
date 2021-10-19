declare namespace Mutation {
	namespace EditUserForAdmin {
		interface Response {
			editUserForAdmin?: boolean;
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
