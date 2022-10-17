import { GraphQLResolveInfo } from "graphql";
import { FindManyLeadsArgs } from "./args/FindManyLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class FindManyLeadsResolver {
    findManyLeads(ctx: any, info: GraphQLResolveInfo, args: FindManyLeadsArgs): Promise<Leads[]>;
}
