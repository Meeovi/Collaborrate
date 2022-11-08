import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMediamanagerArgs } from "./args/FindUniqueMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class FindUniqueMediamanagerResolver {
    mediamanager(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMediamanagerArgs): Promise<Mediamanager | null>;
}
