import { GraphQLResolveInfo } from "graphql";
import { FindManyMediamanagerArgs } from "./args/FindManyMediamanagerArgs";
import { Mediamanager } from "../../../models/Mediamanager";
export declare class FindManyMediamanagerResolver {
    mediamanagers(ctx: any, info: GraphQLResolveInfo, args: FindManyMediamanagerArgs): Promise<Mediamanager[]>;
}
