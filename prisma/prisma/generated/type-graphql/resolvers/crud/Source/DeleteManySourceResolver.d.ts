import { GraphQLResolveInfo } from "graphql";
import { DeleteManySourceArgs } from "./args/DeleteManySourceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySourceResolver {
    deleteManySource(ctx: any, info: GraphQLResolveInfo, args: DeleteManySourceArgs): Promise<AffectedRowsOutput>;
}
