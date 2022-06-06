import { GraphQLResolveInfo } from "graphql";
import { UpdateManyShopsArgs } from "./args/UpdateManyShopsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShopsResolver {
    updateManyShops(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShopsArgs): Promise<AffectedRowsOutput>;
}
