declare namespace Mutation {
	namespace DeleteUserForAdmin {
		interface Response {
			deleteUserForAdmin?: boolean;
		}

		interface Variables {
			input: {
				id: string
			}
		}
	}
}
