"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutNewsletter_subscribersInput_1 = require("../inputs/CustomersCreateNestedOneWithoutNewsletter_subscribersInput");
let Newsletter_subscribersCreateInput = class Newsletter_subscribersCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Newsletter_subscribersCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutNewsletter_subscribersInput_1.CustomersCreateNestedOneWithoutNewsletter_subscribersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutNewsletter_subscribersInput_1.CustomersCreateNestedOneWithoutNewsletter_subscribersInput)
], Newsletter_subscribersCreateInput.prototype, "customers", void 0);
Newsletter_subscribersCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateInput", {
        isAbstract: true
    })
], Newsletter_subscribersCreateInput);
exports.Newsletter_subscribersCreateInput = Newsletter_subscribersCreateInput;
