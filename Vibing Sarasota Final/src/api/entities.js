import { businessService, suggestedBusinessService } from './businessService';

// Custom business entity service
export const Business = {
  filter: (filters) => businessService.filter(filters),
  getById: (id) => businessService.getById(id),
};

// Custom suggested business service
export const SuggestedBusiness = {
  create: (data) => suggestedBusinessService.create(data),
};