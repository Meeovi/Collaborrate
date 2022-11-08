import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProjectsArgs } from "./args/UpsertOneProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class UpsertOneProjectsResolver {
    upsertOneProjects(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProjectsArgs): Promise<Projects>;
}
