import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePagesArgs } from "./args/UpdateOnePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class UpdateOnePagesResolver {
    updateOnePages(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePagesArgs): Promise<Pages | null>;
}
