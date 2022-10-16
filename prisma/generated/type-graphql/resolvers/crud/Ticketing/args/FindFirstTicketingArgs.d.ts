import { TicketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";
export declare class FindFirstTicketingArgs {
    where?: TicketingWhereInput | undefined;
    orderBy?: TicketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TicketingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "location" | "date" | "severity" | "team" | "requester" | "requester_email" | "content" | "department" | "media" | "projects" | "ticket_type" | "comment" | "products" | "priority" | "status" | "resolution" | "assigned_to" | "date_modified" | "account_name" | "level" | "projects_projectsToticketing"> | undefined;
}
