declare namespace Mutation {
	namespace EditUserForAdmin {
		interface Response {
			editUserForAdmin?: Entity.IUser;
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
