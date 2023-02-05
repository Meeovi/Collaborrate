import { GraphQLResolveInfo } from "graphql";
import { FindUniquePaymentsOrThrowArgs } from "./args/FindUniquePaymentsOrThrowArgs";
import { Payments } from "../../../models/Payments";
export declare class FindUniquePaymentsOrThrowResolver {
    findUniquePaymentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePaymentsOrThrowArgs): Promise<Payments | null>;
}
