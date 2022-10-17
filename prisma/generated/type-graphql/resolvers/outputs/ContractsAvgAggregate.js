"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ContractsAvgAggregate = class ContractsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ContractsAvgAggregate.prototype, "id", void 0);
ContractsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ContractsAvgAggregate", {
        isAbstract: true
    })
], ContractsAvgAggregate);
exports.ContractsAvgAggregate = ContractsAvgAggregate;
