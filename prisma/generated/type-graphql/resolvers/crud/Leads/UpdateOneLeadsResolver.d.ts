import { GraphQLResolveInfo } from "graphql";
import { UpdateOneLeadsArgs } from "./args/UpdateOneLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class UpdateOneLeadsResolver {
    updateOneLeads(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLeadsArgs): Promise<Leads | null>;
}
