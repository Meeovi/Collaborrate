import { MeetingOrderByWithRelationInput } from "../../../inputs/MeetingOrderByWithRelationInput";
import { MeetingWhereInput } from "../../../inputs/MeetingWhereInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";
export declare class AggregateMeetingArgs {
    where?: MeetingWhereInput | undefined;
    orderBy?: MeetingOrderByWithRelationInput[] | undefined;
    cursor?: MeetingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
