import { GraphQLResolveInfo } from "graphql";
import { CreateOneCitiesArgs } from "./args/CreateOneCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class CreateOneCitiesResolver {
    createOneCities(ctx: any, info: GraphQLResolveInfo, args: CreateOneCitiesArgs): Promise<Cities>;
}
