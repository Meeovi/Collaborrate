import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSourceArgs } from "./args/FindUniqueSourceArgs";
import { Source } from "../../../models/Source";
export declare class FindUniqueSourceResolver {
    source(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSourceArgs): Promise<Source | null>;
}
