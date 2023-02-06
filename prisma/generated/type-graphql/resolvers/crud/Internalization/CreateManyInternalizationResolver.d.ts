import { GraphQLResolveInfo } from "graphql";
import { CreateManyInternalizationArgs } from "./args/CreateManyInternalizationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInternalizationResolver {
    createManyInternalization(ctx: any, info: GraphQLResolveInfo, args: CreateManyInternalizationArgs): Promise<AffectedRowsOutput>;
}
