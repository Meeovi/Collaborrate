import { GraphQLResolveInfo } from "graphql";
import { CreateOneMediamanagerArgs } from "./args/CreateOneMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class CreateOneMediamanagerResolver {
    createOneMediamanager(ctx: any, info: GraphQLResolveInfo, args: CreateOneMediamanagerArgs): Promise<Mediamanager>;
}
