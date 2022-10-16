import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomer_groupArgs } from "./args/CreateOneCustomer_groupArgs";
import { Customer_group } from "../../../models/Customer_group";
export declare class CreateOneCustomer_groupResolver {
    createOneCustomer_group(ctx: any, info: GraphQLResolveInfo, args: CreateOneCustomer_groupArgs): Promise<Customer_group>;
}
