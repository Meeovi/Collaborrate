import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomer_paymentArgs } from "./args/UpdateManyCustomer_paymentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomer_paymentResolver {
    updateManyCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomer_paymentArgs): Promise<AffectedRowsOutput>;
}
