"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Customer_groupCountAggregate = class Customer_groupCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Customer_groupCountAggregate.prototype, "_all", void 0);
Customer_groupCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Customer_groupCountAggregate", {
        isAbstract: true
    })
], Customer_groupCountAggregate);
exports.Customer_groupCountAggregate = Customer_groupCountAggregate;
