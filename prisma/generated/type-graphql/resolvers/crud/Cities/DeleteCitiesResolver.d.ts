import { GraphQLResolveInfo } from "graphql";
import { DeleteCitiesArgs } from "./args/DeleteCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class DeleteCitiesResolver {
    deleteCities(ctx: any, info: GraphQLResolveInfo, args: DeleteCitiesArgs): Promise<Cities | null>;
}
