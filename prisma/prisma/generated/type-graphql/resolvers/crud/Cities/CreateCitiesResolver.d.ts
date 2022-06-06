import { GraphQLResolveInfo } from "graphql";
import { CreateCitiesArgs } from "./args/CreateCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class CreateCitiesResolver {
    createCities(ctx: any, info: GraphQLResolveInfo, args: CreateCitiesArgs): Promise<Cities>;
}
