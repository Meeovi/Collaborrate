import { GraphQLResolveInfo } from "graphql";
import { CreateOneInternalizationArgs } from "./args/CreateOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class CreateOneInternalizationResolver {
    createOneInternalization(ctx: any, info: GraphQLResolveInfo, args: CreateOneInternalizationArgs): Promise<Internalization>;
}
