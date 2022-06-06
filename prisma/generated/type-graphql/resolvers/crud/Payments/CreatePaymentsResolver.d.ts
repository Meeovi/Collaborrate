import { GraphQLResolveInfo } from "graphql";
import { CreatePaymentsArgs } from "./args/CreatePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class CreatePaymentsResolver {
    createPayments(ctx: any, info: GraphQLResolveInfo, args: CreatePaymentsArgs): Promise<Payments>;
}
