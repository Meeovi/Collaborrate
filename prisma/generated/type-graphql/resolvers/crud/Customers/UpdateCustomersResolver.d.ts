import { GraphQLResolveInfo } from "graphql";
import { UpdateCustomersArgs } from "./args/UpdateCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class UpdateCustomersResolver {
    updateCustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomersArgs): Promise<Customers | null>;
}
