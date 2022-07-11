import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftCreateInput } from "../../../inputs/EndofshiftCreateInput";
import { EndofshiftUpdateInput } from "../../../inputs/EndofshiftUpdateInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput, {
    nullable: false
  })
  where!: EndofshiftWhereUniqueInput;

  @TypeGraphQL.Field(_type => EndofshiftCreateInput, {
    nullable: false
  })
  create!: EndofshiftCreateInput;

  @TypeGraphQL.Field(_type => EndofshiftUpdateInput, {
    nullable: false
  })
  update!: EndofshiftUpdateInput;
}
