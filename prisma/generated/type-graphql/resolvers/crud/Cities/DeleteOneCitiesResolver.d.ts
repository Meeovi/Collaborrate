import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCitiesArgs } from "./args/DeleteOneCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class DeleteOneCitiesResolver {
    deleteOneCities(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCitiesArgs): Promise<Cities | null>;
}
