declare namespace Entity {
  type IConfigurationTypes = 'PRIVACY_POLICY' | 'TERMS_CONDITIONS';
  
  interface IConfiguration {
    id: string;
    description: string;
    configurationType: string;
    createdAt: Date;
    updatedAt: Date;
  }
}