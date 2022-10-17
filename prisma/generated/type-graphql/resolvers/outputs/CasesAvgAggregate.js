"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CasesAvgAggregate = class CasesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CasesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CasesAvgAggregate.prototype, "case_number", void 0);
CasesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CasesAvgAggregate", {
        isAbstract: true
    })
], CasesAvgAggregate);
exports.CasesAvgAggregate = CasesAvgAggregate;
