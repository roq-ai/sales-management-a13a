interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Sales Manager', 'Sales Representative', 'Sales Analyst', 'Customer'],
  tenantName: 'Company',
  applicationName: 'Sales Management App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View sales details', 'View sales invoices', 'View user information', 'View company information'],
  ownerAbilities: [
    'Manage sales details',
    'Manage sales invoices',
    'Manage user accounts',
    'Manage company information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1fb45917-a608-470c-9931-64ce0538d1d1',
};
