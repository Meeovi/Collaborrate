import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomerArgs } from "./args/UpdateCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class UpdateCustomerResolver {
    updateCustomer(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomerArgs): Promise<Customer | null>;
}
