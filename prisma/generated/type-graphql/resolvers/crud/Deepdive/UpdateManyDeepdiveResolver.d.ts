import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDeepdiveArgs } from "./args/UpdateManyDeepdiveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDeepdiveResolver {
    updateManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDeepdiveArgs): Promise<AffectedRowsOutput>;
}
