import { GraphQLResolveInfo } from "graphql";
import { FindManyAttributesArgs } from "./args/FindManyAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class FindManyAttributesResolver {
    findManyAttributes(ctx: any, info: GraphQLResolveInfo, args: FindManyAttributesArgs): Promise<Attributes[]>;
}
