import { GraphQLResolveInfo } from "graphql";
import { DeleteManyShopsArgs } from "./args/DeleteManyShopsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShopsResolver {
    deleteManyShops(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShopsArgs): Promise<AffectedRowsOutput>;
}
