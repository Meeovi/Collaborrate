import { GraphQLResolveInfo } from "graphql";
import { CreateOneAttributesArgs } from "./args/CreateOneAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class CreateOneAttributesResolver {
    createOneAttributes(ctx: any, info: GraphQLResolveInfo, args: CreateOneAttributesArgs): Promise<Attributes>;
}
