export type LivesState = {
  readonly data: Videos[];
};

export type VideosState = {
  readonly data: Videos[];
};

export type UserState = {
  readonly data: User;
};

export type ChannelState = {
  readonly data: Channel;
  readonly status: Channel_Status;
};

export type Videos = {
  id: number;
  title: string;
  thumbnail: string;
  live?: boolean;
  viewers: number;
  totalViews: number;
  channel: string;
  channelImg: string;
};

export type User = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  description: string;
  myChannel: {
    followers: number;
    videos: Videos[];
  };
  following: {
    channels: Channel[];
    videos: Videos[];
  };
};

export type Channel = {
  id: number;
  name: string;
  slug: string;
  channelImg: string;
  followers?: number;
  videos?: Videos[];
};

export type Channel_Status = {
  live: boolean;
};

export type PagesMapState = {
  channel: {
    readonly data: Channel;
    readonly status: Channel_Status;
  };
  videos: {
    readonly data: Videos[];
  };
  lives: {
    readonly data: Videos[];
  };
  user: {
    readonly data: User;
  };
};
