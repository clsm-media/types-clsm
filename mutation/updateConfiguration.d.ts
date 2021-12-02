declare namespace Mutation {
  namespace UpdateConfiguration {
    interface Response {
      updateConfiguration?: Entity.IConfiguration;
    }

    interface Variables {
      input: {
        configurationType: Entity.IConfigurationTypes;
        description: string;
      }
    }
  }
}
