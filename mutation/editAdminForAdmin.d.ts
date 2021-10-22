declare namespace Mutation {
	namespace EditAdminForAdmin {
		interface Response {
			editAdminForAdmin?: Entity.IAdmin;
		}

		interface Variables {
			input: {
				id: string
				firstName: string;
				lastName: string;
				role: Entity.IAdminRoleName;
			}
		}
	}
}
