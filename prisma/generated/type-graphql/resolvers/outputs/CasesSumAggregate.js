"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let CasesSumAggregate = class CasesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], CasesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CasesSumAggregate.prototype, "case_number", void 0);
CasesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CasesSumAggregate", {
        isAbstract: true
    })
], CasesSumAggregate);
exports.CasesSumAggregate = CasesSumAggregate;
