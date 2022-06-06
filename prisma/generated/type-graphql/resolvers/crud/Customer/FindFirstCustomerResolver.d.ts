import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerArgs } from "./args/FindFirstCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class FindFirstCustomerResolver {
    findFirstCustomer(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomerArgs): Promise<Customer | null>;
}
