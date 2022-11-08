import { TicketingOrderByWithAggregationInput } from "../../../inputs/TicketingOrderByWithAggregationInput";
import { TicketingScalarWhereWithAggregatesInput } from "../../../inputs/TicketingScalarWhereWithAggregatesInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
export declare class GroupByTicketingArgs {
    where?: TicketingWhereInput | undefined;
    orderBy?: TicketingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "location" | "date" | "severity" | "team" | "requester" | "requester_email" | "content" | "department" | "media" | "projects" | "ticket_type" | "comment" | "products" | "priority" | "status" | "resolution" | "assigned_to" | "date_modified" | "account_name" | "level" | "projects_projectsToticketing">;
    having?: TicketingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
