import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCountriesArgs } from "./args/UpdateManyCountriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCountriesResolver {
    updateManyCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCountriesArgs): Promise<AffectedRowsOutput>;
}
