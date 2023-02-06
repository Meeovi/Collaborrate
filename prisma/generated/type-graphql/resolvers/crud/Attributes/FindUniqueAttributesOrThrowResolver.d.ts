import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAttributesOrThrowArgs } from "./args/FindUniqueAttributesOrThrowArgs";
import { Attributes } from "../../../models/Attributes";
export declare class FindUniqueAttributesOrThrowResolver {
    findUniqueAttributesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttributesOrThrowArgs): Promise<Attributes | null>;
}
