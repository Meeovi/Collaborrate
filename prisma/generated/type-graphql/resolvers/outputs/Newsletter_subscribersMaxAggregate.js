"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersMaxAggregate = class Newsletter_subscribersMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersMaxAggregate.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Newsletter_subscribersMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersMaxAggregate.prototype, "cust_id", void 0);
Newsletter_subscribersMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Newsletter_subscribersMaxAggregate", {
        isAbstract: true
    })
], Newsletter_subscribersMaxAggregate);
exports.Newsletter_subscribersMaxAggregate = Newsletter_subscribersMaxAggregate;
