import { GraphQLResolveInfo } from "graphql";
import { FindFirstMediamanagerOrThrowArgs } from "./args/FindFirstMediamanagerOrThrowArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class FindFirstMediamanagerOrThrowResolver {
    findFirstMediamanagerOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstMediamanagerOrThrowArgs): Promise<Mediamanager | null>;
}
