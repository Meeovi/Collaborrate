import { GraphQLResolveInfo } from "graphql";
import { DeleteOneLeadsArgs } from "./args/DeleteOneLeadsArgs";
import { Leads } from "../../../models/Leads";
export declare class DeleteOneLeadsResolver {
    deleteOneLeads(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLeadsArgs): Promise<Leads | null>;
}
