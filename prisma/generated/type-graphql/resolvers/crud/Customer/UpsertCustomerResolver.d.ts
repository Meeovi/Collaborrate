import { GraphQLResolveInfo } from "graphql";
import { UpsertCustomerArgs } from "./args/UpsertCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class UpsertCustomerResolver {
    upsertCustomer(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomerArgs): Promise<Customer>;
}
