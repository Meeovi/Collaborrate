import { GraphQLResolveInfo } from "graphql";
import { UpdateLeadsArgs } from "./args/UpdateLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class UpdateLeadsResolver {
    updateLeads(ctx: any, info: GraphQLResolveInfo, args: UpdateLeadsArgs): Promise<Leads | null>;
}
