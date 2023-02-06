import { GraphQLResolveInfo } from "graphql";
import { DeleteOneMediamanagerArgs } from "./args/DeleteOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class DeleteOneMediamanagerResolver {
    deleteOneMediamanager(ctx: any, info: GraphQLResolveInfo, args: DeleteOneMediamanagerArgs): Promise<Mediamanager | null>;
}
