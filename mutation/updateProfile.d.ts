declare namespace Mutation {
  namespace UpdateProfile {
    interface Response {
      updateProfile?: {
        jwtToken: string;
      };
    }

    interface Variables {
      input: {
        firstName: string;
        lastName: string;
        bio: string;
        profilePictureFile?: File;
      }
    }
  }
}
