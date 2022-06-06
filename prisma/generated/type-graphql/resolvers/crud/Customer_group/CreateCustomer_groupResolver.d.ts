import { GraphQLResolveInfo } from "graphql";
import { CreateCustomer_groupArgs } from "./args/CreateCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class CreateCustomer_groupResolver {
    createCustomer_group(ctx: any, info: GraphQLResolveInfo, args: CreateCustomer_groupArgs): Promise<Customer_group>;
}
