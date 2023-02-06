import { GraphQLResolveInfo } from "graphql";
import { CreateOnePaymentsArgs } from "./args/CreateOnePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class CreateOnePaymentsResolver {
    createOnePayments(ctx: any, info: GraphQLResolveInfo, args: CreateOnePaymentsArgs): Promise<Payments>;
}
