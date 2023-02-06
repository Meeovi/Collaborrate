import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePaymentsArgs } from "./args/UpdateOnePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class UpdateOnePaymentsResolver {
    updateOnePayments(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePaymentsArgs): Promise<Payments | null>;
}
