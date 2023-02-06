import { GraphQLResolveInfo } from "graphql";
import { FindUniquePagesOrThrowArgs } from "./args/FindUniquePagesOrThrowArgs";
import { Pages } from "../../../models/Pages";
export declare class FindUniquePagesOrThrowResolver {
    findUniquePagesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniquePagesOrThrowArgs): Promise<Pages | null>;
}
