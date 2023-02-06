import { GraphQLResolveInfo } from "graphql";
import { FindFirstPaymentsArgs } from "./args/FindFirstPaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class FindFirstPaymentsResolver {
    findFirstPayments(ctx: any, info: GraphQLResolveInfo, args: FindFirstPaymentsArgs): Promise<Payments | null>;
}
