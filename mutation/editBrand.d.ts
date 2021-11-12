declare namespace Mutation {
  namespace EditBrand {
    interface Response {
      editBrand?: Entity.IBrand;
    }

    interface Variables {
      input: {
        id: string;
        brandName: string;
        contactInfo: string;
        brandURL: string;
        description: string;
        facebook: string;
        instagram: string;
        twitter: string;
        logoFile?: File;
        usersIds: string[];
        interestsIds: string[];
      };
    }
  }
}
