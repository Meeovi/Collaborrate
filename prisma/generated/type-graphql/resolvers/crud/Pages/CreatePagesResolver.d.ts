import { GraphQLResolveInfo } from "graphql";
import { CreatePagesArgs } from "./args/CreatePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class CreatePagesResolver {
    createPages(ctx: any, info: GraphQLResolveInfo, args: CreatePagesArgs): Promise<Pages>;
}
