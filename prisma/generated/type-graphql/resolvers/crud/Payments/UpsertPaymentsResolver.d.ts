import { GraphQLResolveInfo } from "graphql";
import { UpsertPaymentsArgs } from "./args/UpsertPaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class UpsertPaymentsResolver {
    upsertPayments(ctx: any, info: GraphQLResolveInfo, args: UpsertPaymentsArgs): Promise<Payments>;
}
