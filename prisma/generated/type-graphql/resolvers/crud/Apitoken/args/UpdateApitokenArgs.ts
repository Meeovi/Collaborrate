import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApitokenUpdateInput } from "../../../inputs/ApitokenUpdateInput";
import { ApitokenWhereUniqueInput } from "../../../inputs/ApitokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateApitokenArgs {
  @TypeGraphQL.Field(_type => ApitokenUpdateInput, {
    nullable: false
  })
  data!: ApitokenUpdateInput;

  @TypeGraphQL.Field(_type => ApitokenWhereUniqueInput, {
    nullable: false
  })
  where!: ApitokenWhereUniqueInput;
}
