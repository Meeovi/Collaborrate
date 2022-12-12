"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Content_typeWhereUniqueInput = class Content_typeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Content_typeWhereUniqueInput.prototype, "id", void 0);
Content_typeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Content_typeWhereUniqueInput", {
        isAbstract: true
    })
], Content_typeWhereUniqueInput);
exports.Content_typeWhereUniqueInput = Content_typeWhereUniqueInput;
