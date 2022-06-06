import { EventsCreateInput } from "../../../inputs/EventsCreateInput";
import { EventsUpdateInput } from "../../../inputs/EventsUpdateInput";
import { EventsWhereUniqueInput } from "../../../inputs/EventsWhereUniqueInput";
export declare class UpsertEventsArgs {
    where: EventsWhereUniqueInput;
    create: EventsCreateInput;
    update: EventsUpdateInput;
}
