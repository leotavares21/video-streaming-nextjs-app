export type LivesState = {
  readonly data: Video[];
};

export type VideosState = {
  readonly data: Video[];
};

export type UserState = {
  readonly data: User;
};

export type ProfileState = {
  readonly data: Profile;
  readonly status: Profile_Status;
};

export type Video = {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  live?: boolean;
  viewers: number;
  totalViews: number;
  profile: string;
  profileImg: string;
};

export type User = {
  id: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  description: string;
  followers: number;
  myVideos: Video[];
  following: {
    profiles: Profile[];
    videos: Video[];
  };
};

export type Profile = {
  id: number;
  name: string;
  slug: string;
  profileImg: string;
  followers?: number;
  videos?: Video[];
};

export type Profile_Status = {
  live: boolean;
};

export type PagesMapState = {
  profile: {
    readonly data: Profile;
    readonly status: Profile_Status;
  };
  videos: {
    readonly data: Video[];
  };
  lives: {
    readonly data: Video[];
  };
  user: {
    readonly data: User;
  };
};
