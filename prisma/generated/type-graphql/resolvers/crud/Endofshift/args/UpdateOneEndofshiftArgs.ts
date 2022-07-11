import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftUpdateInput } from "../../../inputs/EndofshiftUpdateInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftUpdateInput, {
    nullable: false
  })
  data!: EndofshiftUpdateInput;

  @TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput, {
    nullable: false
  })
  where!: EndofshiftWhereUniqueInput;
}
