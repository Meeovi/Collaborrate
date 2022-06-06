"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateManyCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailsCreateManyCustomersInput = class EmailsCreateManyCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsCreateManyCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateManyCustomersInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateManyCustomersInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyCustomersInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyCustomersInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyCustomersInput.prototype, "recipients", void 0);
EmailsCreateManyCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateManyCustomersInput", {
        isAbstract: true
    })
], EmailsCreateManyCustomersInput);
exports.EmailsCreateManyCustomersInput = EmailsCreateManyCustomersInput;
