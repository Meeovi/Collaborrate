import { GraphQLResolveInfo } from "graphql";
import { CreateOnePagesArgs } from "./args/CreateOnePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class CreateOnePagesResolver {
    createOnePages(ctx: any, info: GraphQLResolveInfo, args: CreateOnePagesArgs): Promise<Pages>;
}
