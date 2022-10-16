import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLeadsArgs } from "./args/DeleteManyLeadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLeadsResolver {
    deleteManyLeads(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLeadsArgs): Promise<AffectedRowsOutput>;
}
