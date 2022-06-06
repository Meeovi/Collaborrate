import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLeadsArgs } from "./args/FindUniqueLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class FindUniqueLeadsResolver {
    findUniqueLeads(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLeadsArgs): Promise<Leads | null>;
}
