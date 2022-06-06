import { GraphQLResolveInfo } from "graphql";
import { UpsertProjectsArgs } from "./args/UpsertProjectsArgs";
import { Projects } from "../../../models/Projects";
export declare class UpsertProjectsResolver {
    upsertProjects(ctx: any, info: GraphQLResolveInfo, args: UpsertProjectsArgs): Promise<Projects>;
}
