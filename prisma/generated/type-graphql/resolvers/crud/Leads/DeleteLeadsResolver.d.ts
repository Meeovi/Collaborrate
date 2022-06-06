import { GraphQLResolveInfo } from "graphql";
import { DeleteLeadsArgs } from "./args/DeleteLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class DeleteLeadsResolver {
    deleteLeads(ctx: any, info: GraphQLResolveInfo, args: DeleteLeadsArgs): Promise<Leads | null>;
}
