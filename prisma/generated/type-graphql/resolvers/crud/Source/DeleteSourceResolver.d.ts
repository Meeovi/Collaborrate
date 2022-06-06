import { GraphQLResolveInfo } from "graphql";
import { DeleteSourceArgs } from "./args/DeleteSourceArgs";
import { Source } from "../../../models/Source";
export declare class DeleteSourceResolver {
    deleteSource(ctx: any, info: GraphQLResolveInfo, args: DeleteSourceArgs): Promise<Source | null>;
}
