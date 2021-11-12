declare namespace Mutation {
  namespace CreateBrand {
    interface Response {
      createBrand?: Entity.IBrand;
    }

    interface Variables {
      input: {
        brandName: string;
        contactInfo: string;
        description: string;
        brandURL: string;
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
