import { GraphQLResolveInfo } from "graphql";
import { FindUniquePagesArgs } from "./args/FindUniquePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class FindUniquePagesResolver {
    findUniquePages(ctx: any, info: GraphQLResolveInfo, args: FindUniquePagesArgs): Promise<Pages | null>;
}
