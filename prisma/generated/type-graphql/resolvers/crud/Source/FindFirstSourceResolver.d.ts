import { GraphQLResolveInfo } from "graphql";
import { FindFirstSourceArgs } from "./args/FindFirstSourceArgs";
import { Source } from "../../../models/Source";
export declare class FindFirstSourceResolver {
    findFirstSource(ctx: any, info: GraphQLResolveInfo, args: FindFirstSourceArgs): Promise<Source | null>;
}
