export interface IVideoSeries {
  title: string;
  description?: string;
  images?: Image;
  color?: string;
  videos?: IVideoItem[];
}

export interface IVideoItem {
  id: string;
  title: string;
  description?: string;
  images?: Image;
  durationSeconds?: number;
  youtubeId: string;
  color?: string;
}

export interface IYouTubeEmbed {
  id: string | null;
}

export type Image = {
  large?: string;
  medium?: string;
  mini?: string;
  small?: string;
};

export type IconProps = {
  size: number;
};

export interface FetchAction {
  field: string;
  value: any;
}

export interface FetchState {
  loading: boolean;
  errors: any;
  data: any;
  called: boolean;
  [key: string]: any;
}
