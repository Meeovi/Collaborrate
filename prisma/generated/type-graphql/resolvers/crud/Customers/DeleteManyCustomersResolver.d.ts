import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomersArgs } from "./args/DeleteManyCustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomersResolver {
    deleteManyCustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomersArgs): Promise<AffectedRowsOutput>;
}
