import { GraphQLResolveInfo } from "graphql";
import { FindFirstCitiesOrThrowArgs } from "./args/FindFirstCitiesOrThrowArgs";
import { Cities } from "../../../models/Cities";
export declare class FindFirstCitiesOrThrowResolver {
    findFirstCitiesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCitiesOrThrowArgs): Promise<Cities | null>;
}
