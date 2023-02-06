import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVendorsArgs } from "./args/DeleteManyVendorsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVendorsResolver {
    deleteManyVendors(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVendorsArgs): Promise<AffectedRowsOutput>;
}
