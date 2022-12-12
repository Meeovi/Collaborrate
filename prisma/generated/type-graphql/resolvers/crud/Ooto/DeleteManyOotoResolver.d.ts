import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOotoArgs } from "./args/DeleteManyOotoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOotoResolver {
    deleteManyOoto(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOotoArgs): Promise<AffectedRowsOutput>;
}
