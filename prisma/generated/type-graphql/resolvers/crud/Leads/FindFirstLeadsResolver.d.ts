import { GraphQLResolveInfo } from "graphql";
import { FindFirstLeadsArgs } from "./args/FindFirstLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class FindFirstLeadsResolver {
    findFirstLeads(ctx: any, info: GraphQLResolveInfo, args: FindFirstLeadsArgs): Promise<Leads | null>;
}
