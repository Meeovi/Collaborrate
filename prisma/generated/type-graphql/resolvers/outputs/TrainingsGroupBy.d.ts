import { TrainingsAvgAggregate } from "../outputs/TrainingsAvgAggregate";
import { TrainingsCountAggregate } from "../outputs/TrainingsCountAggregate";
import { TrainingsMaxAggregate } from "../outputs/TrainingsMaxAggregate";
import { TrainingsMinAggregate } from "../outputs/TrainingsMinAggregate";
import { TrainingsSumAggregate } from "../outputs/TrainingsSumAggregate";
export declare class TrainingsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    subject: string | null;
    content: string | null;
    media: string | null;
    link: string | null;
    steps: string | null;
    updated: Date | null;
    analytics: string | null;
    competency: string | null;
    course: string | null;
    grade: string | null;
    school: string | null;
    comment: number | null;
    address: string | null;
    country: number | null;
    state: number | null;
    postal: string | null;
    teacher: string | null;
    student: string | null;
    announcement: string | null;
    resource: string | null;
    badges: string | null;
    isPublic: string | null;
    isCompleted: string | null;
    speakers: string | null;
    fieldTrips: string | null;
    assignments: string | null;
    assignmentsDueDate: string | null;
    origanalityReport: string | null;
    products: bigint | null;
    faqs: string | null;
    languages: string | null;
    checklists: bigint | null;
    city: string | null;
    meetups: string | null;
    lab: string | null;
    digiboards: string | null;
    countries: string | null;
    states: string | null;
    type: string | null;
    _count: TrainingsCountAggregate | null;
    _avg: TrainingsAvgAggregate | null;
    _sum: TrainingsSumAggregate | null;
    _min: TrainingsMinAggregate | null;
    _max: TrainingsMaxAggregate | null;
}
