import { GraphQLResolveInfo } from "graphql";
import { CreateOneCustomersArgs } from "./args/CreateOneCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class CreateOneCustomersResolver {
    createOneCustomers(ctx: any, info: GraphQLResolveInfo, args: CreateOneCustomersArgs): Promise<Customers>;
}
