"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PaymentsAvgAggregate = class PaymentsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PaymentsAvgAggregate.prototype, "id", void 0);
PaymentsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PaymentsAvgAggregate", {
        isAbstract: true
    })
], PaymentsAvgAggregate);
exports.PaymentsAvgAggregate = PaymentsAvgAggregate;
