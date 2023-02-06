import { GraphQLResolveInfo } from "graphql";
import { UpdateOneMediamanagerArgs } from "./args/UpdateOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class UpdateOneMediamanagerResolver {
    updateOneMediamanager(ctx: any, info: GraphQLResolveInfo, args: UpdateOneMediamanagerArgs): Promise<Mediamanager | null>;
}
