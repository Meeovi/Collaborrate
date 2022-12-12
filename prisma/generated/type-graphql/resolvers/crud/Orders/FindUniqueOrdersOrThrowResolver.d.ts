import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrdersOrThrowArgs } from "./args/FindUniqueOrdersOrThrowArgs";
import { Orders } from "../../../models/Orders";
export declare class FindUniqueOrdersOrThrowResolver {
    findUniqueOrdersOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrdersOrThrowArgs): Promise<Orders | null>;
}
