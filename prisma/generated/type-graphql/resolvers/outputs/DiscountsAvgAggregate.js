"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DiscountsAvgAggregate = class DiscountsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DiscountsAvgAggregate.prototype, "id", void 0);
DiscountsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DiscountsAvgAggregate", {
        isAbstract: true
    })
], DiscountsAvgAggregate);
exports.DiscountsAvgAggregate = DiscountsAvgAggregate;
