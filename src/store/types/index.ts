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
  total_views: number;
  channel: string;
  channel_img: string;
};

export type User = {
  id: number;
  name: string;
  last_name: string;
  img: string;
  my_channel: {
    name: string;
    followers: number;
    videos: Videos[];
  };
  following: {
    channels: [{ name: string; img: string }];
    videos: Videos[];
  };
};

export type Channel = {
  id: number;
  name: string;
  channel_img: string;
  followers: number;
  videos: Videos[];
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
