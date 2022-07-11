import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEndofshiftArgs {
  @TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput, {
    nullable: false
  })
  where!: EndofshiftWhereUniqueInput;
}
