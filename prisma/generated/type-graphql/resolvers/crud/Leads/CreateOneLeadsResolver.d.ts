import { GraphQLResolveInfo } from "graphql";
import { CreateOneLeadsArgs } from "./args/CreateOneLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class CreateOneLeadsResolver {
    createOneLeads(ctx: any, info: GraphQLResolveInfo, args: CreateOneLeadsArgs): Promise<Leads>;
}
