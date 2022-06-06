"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersCreateWithoutCustomersInput = class Newsletter_subscribersCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Newsletter_subscribersCreateWithoutCustomersInput.prototype, "created_at", void 0);
Newsletter_subscribersCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersCreateWithoutCustomersInput", {
        isAbstract: true
    })
], Newsletter_subscribersCreateWithoutCustomersInput);
exports.Newsletter_subscribersCreateWithoutCustomersInput = Newsletter_subscribersCreateWithoutCustomersInput;
