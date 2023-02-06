import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPagesArgs } from "./args/DeleteManyPagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPagesResolver {
    deleteManyPages(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPagesArgs): Promise<AffectedRowsOutput>;
}
