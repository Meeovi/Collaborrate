import { GraphQLResolveInfo } from "graphql";
import { UpsertOneMediamanagerArgs } from "./args/UpsertOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class UpsertOneMediamanagerResolver {
    upsertOneMediamanager(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMediamanagerArgs): Promise<Mediamanager>;
}
