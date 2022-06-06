import { GraphQLResolveInfo } from "graphql";
import { UpdatePaymentsArgs } from "./args/UpdatePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class UpdatePaymentsResolver {
    updatePayments(ctx: any, info: GraphQLResolveInfo, args: UpdatePaymentsArgs): Promise<Payments | null>;
}
