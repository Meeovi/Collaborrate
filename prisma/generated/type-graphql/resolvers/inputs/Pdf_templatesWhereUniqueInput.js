"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Pdf_templatesWhereUniqueInput = class Pdf_templatesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Pdf_templatesWhereUniqueInput.prototype, "id", void 0);
Pdf_templatesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesWhereUniqueInput", {
        isAbstract: true
    })
], Pdf_templatesWhereUniqueInput);
exports.Pdf_templatesWhereUniqueInput = Pdf_templatesWhereUniqueInput;
