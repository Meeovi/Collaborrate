import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCitiesArgs } from "./args/UpdateOneCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class UpdateOneCitiesResolver {
    updateOneCities(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCitiesArgs): Promise<Cities | null>;
}
