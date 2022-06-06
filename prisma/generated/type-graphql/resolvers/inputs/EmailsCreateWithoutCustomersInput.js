"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailsCreateWithoutCustomersInput = class EmailsCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateWithoutCustomersInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateWithoutCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateWithoutCustomersInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateWithoutCustomersInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateWithoutCustomersInput.prototype, "recipients", void 0);
EmailsCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateWithoutCustomersInput", {
        isAbstract: true
    })
], EmailsCreateWithoutCustomersInput);
exports.EmailsCreateWithoutCustomersInput = EmailsCreateWithoutCustomersInput;
