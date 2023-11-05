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