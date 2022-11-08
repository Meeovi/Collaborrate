import { GraphQLResolveInfo } from "graphql";
import { CreateManyCountriesArgs } from "./args/CreateManyCountriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCountriesResolver {
    createManyCountries(ctx: any, info: GraphQLResolveInfo, args: CreateManyCountriesArgs): Promise<AffectedRowsOutput>;
}
