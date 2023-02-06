import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePaymentsArgs } from "./args/UpsertOnePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class UpsertOnePaymentsResolver {
    upsertOnePayments(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePaymentsArgs): Promise<Payments>;
}
