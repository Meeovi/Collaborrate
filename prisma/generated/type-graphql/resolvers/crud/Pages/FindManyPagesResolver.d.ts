import { GraphQLResolveInfo } from "graphql";
import { FindManyPagesArgs } from "./args/FindManyPagesArgs";
import { Pages } from "../../../models/Pages";
export declare class FindManyPagesResolver {
    findManyPages(ctx: any, info: GraphQLResolveInfo, args: FindManyPagesArgs): Promise<Pages[]>;
}
