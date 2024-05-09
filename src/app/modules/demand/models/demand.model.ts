export interface Demand {
  id: number;
  title: string;
  description: string;
  is_closed: number;
  category: string;
  creator_username: string;
}

export interface DemandDetail {
  id: number;
  title: string;
  status: number;
  description: string;
  created_at: string;
  category_id: number;
  user_id: number;
  userName: string;
  userCreatedAt: string;
  userAvatarId: number;
  userAvatarSrc: string;
  demandFiles: any;
  proposals: Proposal[];
}

export interface Proposal {
  proposalId: number;
  proposalFiles: ProposalFile[];
  proposalCreatedAt: string;
  proposalDescription: string;
}

export interface ProposalFile {
  fileId: number;
  fileSrc: string;
}
