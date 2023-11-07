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

export interface MediaDataType {
    thumbnail_url: string;
    media: MediaDataType[];
    name: string;
    resource_value: string;
}

export interface CourseDetailsType {
    name: string;
    values: CourseDetailsType[];
    description: string;
    title: string;
    active: string
}

export interface ExclusiveFeatureType {
    name: string;
    values: ExclusiveFeatureType[];
    checklist: [];
    title: string;
    file_url: string;
}

export interface ChecklistType {
    text: string;
    icon: string;
    checklist: ChecklistType[];
}

