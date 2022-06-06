import { GraphQLResolveInfo } from "graphql";
import { CreateLeadsArgs } from "./args/CreateLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class CreateLeadsResolver {
    createLeads(ctx: any, info: GraphQLResolveInfo, args: CreateLeadsArgs): Promise<Leads>;
}
