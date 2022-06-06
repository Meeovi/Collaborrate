import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomer_paymentArgs } from "./args/DeleteManyCustomer_paymentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomer_paymentResolver {
    deleteManyCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomer_paymentArgs): Promise<AffectedRowsOutput>;
}
