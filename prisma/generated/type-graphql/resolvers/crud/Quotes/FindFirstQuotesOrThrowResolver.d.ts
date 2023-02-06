import { GraphQLResolveInfo } from "graphql";
import { FindFirstQuotesOrThrowArgs } from "./args/FindFirstQuotesOrThrowArgs";
import { Quotes } from "../../../models/Quotes";
export declare class FindFirstQuotesOrThrowResolver {
    findFirstQuotesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstQuotesOrThrowArgs): Promise<Quotes | null>;
}
