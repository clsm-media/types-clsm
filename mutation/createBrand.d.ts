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
        facebook: string;
        instagram: string;
        twitter: string;
        logoFile?: File;
        usersIds: string[];
      };
    }
  }
}
