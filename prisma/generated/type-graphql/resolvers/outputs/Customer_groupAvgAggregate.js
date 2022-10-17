"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Customer_groupAvgAggregate = class Customer_groupAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupAvgAggregate.prototype, "cust_id", void 0);
Customer_groupAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_groupAvgAggregate", {
        isAbstract: true
    })
], Customer_groupAvgAggregate);
exports.Customer_groupAvgAggregate = Customer_groupAvgAggregate;
