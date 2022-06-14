import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenCreateInput } from "../../../inputs/ApitokenCreateInput";
import { ApitokenUpdateInput } from "../../../inputs/ApitokenUpdateInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenWhereUniqueInput, {
    nullable: false
  })
  where!: ApitokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApitokenCreateInput, {
    nullable: false
  })
  create!: ApitokenCreateInput;

  @TypeGraphQL.Field(_type => ApitokenUpdateInput, {
    nullable: false
  })
  update!: ApitokenUpdateInput;
}
