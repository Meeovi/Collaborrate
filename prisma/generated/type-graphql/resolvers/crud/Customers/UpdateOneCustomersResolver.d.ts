import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCustomersArgs } from "./args/UpdateOneCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class UpdateOneCustomersResolver {
    updateOneCustomers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCustomersArgs): Promise<Customers | null>;
}
