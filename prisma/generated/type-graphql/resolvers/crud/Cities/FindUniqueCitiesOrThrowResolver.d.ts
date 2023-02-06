import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCitiesOrThrowArgs } from "./args/FindUniqueCitiesOrThrowArgs";
import { Cities } from "../../../models/Cities";
export declare class FindUniqueCitiesOrThrowResolver {
    findUniqueCitiesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCitiesOrThrowArgs): Promise<Cities | null>;
}
