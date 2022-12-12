"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FullfillmentsAvgAggregate = class FullfillmentsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FullfillmentsAvgAggregate.prototype, "id", void 0);
FullfillmentsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FullfillmentsAvgAggregate", {
        isAbstract: true
    })
], FullfillmentsAvgAggregate);
exports.FullfillmentsAvgAggregate = FullfillmentsAvgAggregate;
