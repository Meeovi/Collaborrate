import { GraphQLResolveInfo } from "graphql";
import { FindManyInternalizationArgs } from "./args/FindManyInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class FindManyInternalizationResolver {
    internalizations(ctx: any, info: GraphQLResolveInfo, args: FindManyInternalizationArgs): Promise<Internalization[]>;
}
