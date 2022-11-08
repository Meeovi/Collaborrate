import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPaymentsArgs } from "./args/DeleteManyPaymentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPaymentsResolver {
    deleteManyPayments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPaymentsArgs): Promise<AffectedRowsOutput>;
}
