import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVendorsArgs } from "./args/UpdateManyVendorsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVendorsResolver {
    updateManyVendors(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVendorsArgs): Promise<AffectedRowsOutput>;
}
