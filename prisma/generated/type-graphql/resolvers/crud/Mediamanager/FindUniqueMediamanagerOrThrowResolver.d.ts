import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMediamanagerOrThrowArgs } from "./args/FindUniqueMediamanagerOrThrowArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class FindUniqueMediamanagerOrThrowResolver {
    getMediamanager(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMediamanagerOrThrowArgs): Promise<Mediamanager | null>;
}
