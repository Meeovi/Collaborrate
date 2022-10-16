import { GraphQLResolveInfo } from "graphql";
import { DeleteOneAttributesArgs } from "./args/DeleteOneAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class DeleteOneAttributesResolver {
    deleteOneAttributes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAttributesArgs): Promise<Attributes | null>;
}
