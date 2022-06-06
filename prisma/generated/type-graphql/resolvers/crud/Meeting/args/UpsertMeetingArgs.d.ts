import { MeetingCreateInput } from "../../../inputs/MeetingCreateInput";
import { MeetingUpdateInput } from "../../../inputs/MeetingUpdateInput";
import { MeetingWhereUniqueInput } from "../../../inputs/MeetingWhereUniqueInput";
export declare class UpsertMeetingArgs {
    where: MeetingWhereUniqueInput;
    create: MeetingCreateInput;
    update: MeetingUpdateInput;
}
