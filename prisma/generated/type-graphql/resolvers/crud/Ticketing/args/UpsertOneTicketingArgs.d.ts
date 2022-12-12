import { TicketingCreateInput } from "../../../inputs/TicketingCreateInput";
import { TicketingUpdateInput } from "../../../inputs/TicketingUpdateInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";
export declare class UpsertOneTicketingArgs {
    where: TicketingWhereUniqueInput;
    create: TicketingCreateInput;
    update: TicketingUpdateInput;
}
