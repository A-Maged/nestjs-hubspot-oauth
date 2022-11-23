export type User = {
  hubspot: {
    accessToken: string;
    refreshToken: string;
  };
};

export type GetTokenByCodeResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
};
