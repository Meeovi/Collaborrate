import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLeadsArgs } from "./args/UpdateManyLeadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLeadsResolver {
    updateManyLeads(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLeadsArgs): Promise<AffectedRowsOutput>;
}
