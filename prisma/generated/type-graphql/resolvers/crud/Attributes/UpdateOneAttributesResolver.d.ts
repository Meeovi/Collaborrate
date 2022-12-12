import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAttributesArgs } from "./args/UpdateOneAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class UpdateOneAttributesResolver {
    updateOneAttributes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAttributesArgs): Promise<Attributes | null>;
}
