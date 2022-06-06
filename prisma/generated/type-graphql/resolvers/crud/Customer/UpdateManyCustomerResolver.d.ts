import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomerArgs } from "./args/UpdateManyCustomerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomerResolver {
    updateManyCustomer(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomerArgs): Promise<AffectedRowsOutput>;
}
