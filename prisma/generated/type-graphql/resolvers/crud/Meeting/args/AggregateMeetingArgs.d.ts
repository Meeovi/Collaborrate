import { MeetingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MeetingOrderByWithRelationAndSearchRelevanceInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";
export declare class AggregateMeetingArgs {
    where?: MeetingWhereInput | undefined;
    orderBy?: MeetingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MeetingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
