import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomersArgs } from "./args/UpdateManyCustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomersResolver {
    updateManyCustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomersArgs): Promise<AffectedRowsOutput>;
}
