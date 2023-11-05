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

