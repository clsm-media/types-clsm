declare namespace Query {
  namespace GetBrandById {
    interface Response {
      getBrandById: Entity.IBrand;
    }
  
    interface Variables {
      id: string;
    }
  }
}