import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrdersOrThrowArgs } from "./args/FindFirstOrdersOrThrowArgs";
import { Orders } from "../../../models/Orders";
export declare class FindFirstOrdersOrThrowResolver {
    findFirstOrdersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrdersOrThrowArgs): Promise<Orders | null>;
}
