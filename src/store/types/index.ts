export enum tabActions {
  SET_CURRENT_TAB = 'SET_CURRENT_TAB'
}

export type TabState = {
  readonly activeTab: number;
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
  channel: string;
  channel_img: string;
};

export type PagesMapState = {
  tab: {
    readonly activeTab: number;
  };
  videos: {
    readonly data: Videos[];
  };
};
