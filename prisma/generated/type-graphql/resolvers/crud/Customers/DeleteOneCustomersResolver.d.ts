import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCustomersArgs } from "./args/DeleteOneCustomersArgs";
import { Customers } from "../../../models/Customers";
export declare class DeleteOneCustomersResolver {
    deleteOneCustomers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCustomersArgs): Promise<Customers | null>;
}
