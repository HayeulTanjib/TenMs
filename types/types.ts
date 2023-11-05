export interface Data {
    title: string;
    description: string;
    sections: []
}

export interface InstructorType {
    name: string;
    image: string;
    description: string;
    values: InstructorType[]
}
export interface FeaturesType {
    name: string;
    title: string;
    subtitle: string;
    icon: string;
    values: FeaturesType[]
}
export interface PointersType {
  name: string,
  text: string;
  values: PointersType[]
}

export interface MediaData {
    thumbnail_url: string;
    media: MediaData[];
    name: string;
}

