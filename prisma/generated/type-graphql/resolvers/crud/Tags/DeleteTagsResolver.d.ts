import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsArgs } from "./args/DeleteTagsArgs";
import { Tags } from "../../../models/Tags";
export declare class DeleteTagsResolver {
    deleteTags(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsArgs): Promise<Tags | null>;
}
