import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectsOrThrowArgs } from "./args/FindUniqueProjectsOrThrowArgs";
import { Projects } from "../../../models/Projects";
export declare class FindUniqueProjectsOrThrowResolver {
    findUniqueProjectsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProjectsOrThrowArgs): Promise<Projects | null>;
}
