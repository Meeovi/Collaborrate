import { GraphQLResolveInfo } from "graphql";
import { CreateCustomersArgs } from "./args/CreateCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class CreateCustomersResolver {
    createCustomers(ctx: any, info: GraphQLResolveInfo, args: CreateCustomersArgs): Promise<Customers>;
}
