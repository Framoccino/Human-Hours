export type Skill = {
  id: string;
  name: string;
  category: string;
  validations: number;
}

export type ServiceListing = {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: number; // in hours
  provider: User;
  status: 'open' | 'in-progress' | 'completed';
  createdAt: Date;
}

export type User = {
  id: string;
  address: string; // wallet address
  name: string;
  skills: Skill[];
  trustScore: number;
  hhBalance: number;
  listings: ServiceListing[];
} 