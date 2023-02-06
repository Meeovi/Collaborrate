import { GraphQLResolveInfo } from "graphql";
import { FindFirstApitokenOrThrowArgs } from "./args/FindFirstApitokenOrThrowArgs";
import { Apitoken } from "../../../models/Apitoken";
export declare class FindFirstApitokenOrThrowResolver {
    findFirstApitokenOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstApitokenOrThrowArgs): Promise<Apitoken | null>;
}
