import { GraphQLResolveInfo } from "graphql";
import { CreateInternalizationArgs } from "./args/CreateInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class CreateInternalizationResolver {
    createInternalization(ctx: any, info: GraphQLResolveInfo, args: CreateInternalizationArgs): Promise<Internalization>;
}
