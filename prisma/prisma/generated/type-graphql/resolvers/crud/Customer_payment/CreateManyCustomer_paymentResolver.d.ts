import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomer_paymentArgs } from "./args/CreateManyCustomer_paymentArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomer_paymentResolver {
    createManyCustomer_payment(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomer_paymentArgs): Promise<AffectedRowsOutput>;
}
