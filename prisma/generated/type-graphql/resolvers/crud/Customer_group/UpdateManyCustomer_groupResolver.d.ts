import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomer_groupArgs } from "./args/UpdateManyCustomer_groupArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomer_groupResolver {
    updateManyCustomer_group(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomer_groupArgs): Promise<AffectedRowsOutput>;
}
