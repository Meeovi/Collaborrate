import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OotoUpdateInput } from "../../../inputs/OotoUpdateInput";
import { OotoWhereUniqueInput } from "../../../inputs/OotoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOotoArgs {
  @TypeGraphQL.Field(_type => OotoUpdateInput, {
    nullable: false
  })
  data!: OotoUpdateInput;

  @TypeGraphQL.Field(_type => OotoWhereUniqueInput, {
    nullable: false
  })
  where!: OotoWhereUniqueInput;
}
