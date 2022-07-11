import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneInternalizationArgs {
  @TypeGraphQL.Field(_type => InternalizationWhereUniqueInput, {
    nullable: false
  })
  where!: InternalizationWhereUniqueInput;
}
