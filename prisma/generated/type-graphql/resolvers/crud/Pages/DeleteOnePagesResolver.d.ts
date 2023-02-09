import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePagesArgs } from "./args/DeleteOnePagesArgs";
import { Pages } from "../../../models/Pages";
export declare class DeleteOnePagesResolver {
    deleteOnePages(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePagesArgs): Promise<Pages | null>;
}
