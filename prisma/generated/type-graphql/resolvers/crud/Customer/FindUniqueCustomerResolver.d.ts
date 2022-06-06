import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerArgs } from "./args/FindUniqueCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class FindUniqueCustomerResolver {
    customer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerArgs): Promise<Customer | null>;
}
