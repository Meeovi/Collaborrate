import { GraphQLResolveInfo } from "graphql";
import { CreateCustomerArgs } from "./args/CreateCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class CreateCustomerResolver {
    createCustomer(ctx: any, info: GraphQLResolveInfo, args: CreateCustomerArgs): Promise<Customer>;
}
