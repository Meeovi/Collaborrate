import { GraphQLResolveInfo } from "graphql";
import { FindUniquePaymentsArgs } from "./args/FindUniquePaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class FindUniquePaymentsResolver {
    findUniquePayments(ctx: any, info: GraphQLResolveInfo, args: FindUniquePaymentsArgs): Promise<Payments | null>;
}
