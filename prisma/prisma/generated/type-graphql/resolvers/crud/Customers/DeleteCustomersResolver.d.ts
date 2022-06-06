import { GraphQLResolveInfo } from "graphql";
import { DeleteCustomersArgs } from "./args/DeleteCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class DeleteCustomersResolver {
    deleteCustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomersArgs): Promise<Customers | null>;
}
