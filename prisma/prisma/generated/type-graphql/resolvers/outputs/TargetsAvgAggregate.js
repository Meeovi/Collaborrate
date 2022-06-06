"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TargetsAvgAggregate = class TargetsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TargetsAvgAggregate.prototype, "id", void 0);
TargetsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TargetsAvgAggregate", {
        isAbstract: true
    })
], TargetsAvgAggregate);
exports.TargetsAvgAggregate = TargetsAvgAggregate;
