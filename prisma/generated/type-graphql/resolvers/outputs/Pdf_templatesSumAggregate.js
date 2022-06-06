"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Pdf_templatesSumAggregate = class Pdf_templatesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Pdf_templatesSumAggregate.prototype, "id", void 0);
Pdf_templatesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Pdf_templatesSumAggregate", {
        isAbstract: true
    })
], Pdf_templatesSumAggregate);
exports.Pdf_templatesSumAggregate = Pdf_templatesSumAggregate;
