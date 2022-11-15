import { GraphQLResolveInfo } from "graphql";
import { FindFirstPaymentsOrThrowArgs } from "./args/FindFirstPaymentsOrThrowArgs";
import { Payments } from "../../../models/Payments";
export declare class FindFirstPaymentsOrThrowResolver {
    findFirstPaymentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPaymentsOrThrowArgs): Promise<Payments | null>;
}
