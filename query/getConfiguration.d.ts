declare namespace Query {
  namespace GetConfiguration {
    interface Response {
      getConfiguration?: Entity.IConfiguration;
    }
  
    interface Variables {
      input: {
        configurationType: Entity.IConfigurationTypes;
      }
    }
  }
}