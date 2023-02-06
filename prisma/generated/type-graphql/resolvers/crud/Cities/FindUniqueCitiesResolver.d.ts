import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCitiesArgs } from "./args/FindUniqueCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class FindUniqueCitiesResolver {
    findUniqueCities(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCitiesArgs): Promise<Cities | null>;
}
