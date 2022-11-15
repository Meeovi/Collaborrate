import { GraphQLResolveInfo } from "graphql";
import { FindFirstProjectsOrThrowArgs } from "./args/FindFirstProjectsOrThrowArgs";
import { Projects } from "../../../models/Projects";
export declare class FindFirstProjectsOrThrowResolver {
    findFirstProjectsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProjectsOrThrowArgs): Promise<Projects | null>;
}
