import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Credit_memosWhereInput } from "../inputs/Credit_memosWhereInput";

@TypeGraphQL.InputType("Credit_memosListRelationFilter", {
  isAbstract: true
})
export class Credit_memosListRelationFilter {
  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  every?: Credit_memosWhereInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  some?: Credit_memosWhereInput | undefined;

  @TypeGraphQL.Field(_type => Credit_memosWhereInput, {
    nullable: true
  })
  none?: Credit_memosWhereInput | undefined;
}
