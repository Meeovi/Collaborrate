import { GraphQLResolveInfo } from "graphql";
import { FindManySourceArgs } from "./args/FindManySourceArgs";
import { Source } from "../../../models/Source";
export declare class FindManySourceResolver {
    sources(ctx: any, info: GraphQLResolveInfo, args: FindManySourceArgs): Promise<Source[]>;
}
