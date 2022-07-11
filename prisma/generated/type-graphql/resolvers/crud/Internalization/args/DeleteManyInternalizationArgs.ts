import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationWhereInput, {
    nullable: true
  })
  where?: InternalizationWhereInput | undefined;
}
