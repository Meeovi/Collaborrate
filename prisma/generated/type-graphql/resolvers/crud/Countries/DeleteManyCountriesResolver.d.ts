import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCountriesArgs } from "./args/DeleteManyCountriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCountriesResolver {
    deleteManyCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCountriesArgs): Promise<AffectedRowsOutput>;
}
