export type LivesState = {
  readonly data: Videos[];
};

export type VideosState = {
  readonly data: Videos[];
};

export type Videos = {
  id: number;
  title: string;
  thumbnail: string;
  live: boolean;
  viewers: number;
  total_views: number;
  channel: string;
  channel_img: string;
};

export type UserState = {
  readonly data: User;
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

export type PagesMapState = {
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
