import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoCreateInput } from "../../../inputs/OotoCreateInput";
import { OotoUpdateInput } from "../../../inputs/OotoUpdateInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOotoArgs {
  @TypeGraphQL.Field(_type => OotoWhereUniqueInput, {
    nullable: false
  })
  where!: OotoWhereUniqueInput;

  @TypeGraphQL.Field(_type => OotoCreateInput, {
    nullable: false
  })
  create!: OotoCreateInput;

  @TypeGraphQL.Field(_type => OotoUpdateInput, {
    nullable: false
  })
  update!: OotoUpdateInput;
}
