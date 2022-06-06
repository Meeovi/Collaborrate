import { GraphQLResolveInfo } from "graphql";
import { DeletePaymentsArgs } from "./args/DeletePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class DeletePaymentsResolver {
    deletePayments(ctx: any, info: GraphQLResolveInfo, args: DeletePaymentsArgs): Promise<Payments | null>;
}
