import { GraphQLResolveInfo } from "graphql";
import { FindFirstPagesOrThrowArgs } from "./args/FindFirstPagesOrThrowArgs";
import { Pages } from "../../../models/Pages";
export declare class FindFirstPagesOrThrowResolver {
    findFirstPagesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPagesOrThrowArgs): Promise<Pages | null>;
}
