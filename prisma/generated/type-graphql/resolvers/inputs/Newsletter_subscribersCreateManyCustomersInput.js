"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateManyCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersCreateManyCustomersInput = class Newsletter_subscribersCreateManyCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Newsletter_subscribersCreateManyCustomersInput.prototype, "created_at", void 0);
Newsletter_subscribersCreateManyCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateManyCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersCreateManyCustomersInput);
exports.Newsletter_subscribersCreateManyCustomersInput = Newsletter_subscribersCreateManyCustomersInput;
