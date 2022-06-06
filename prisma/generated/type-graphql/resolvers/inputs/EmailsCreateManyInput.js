"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EmailsCreateManyInput = class EmailsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EmailsCreateManyInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EmailsCreateManyInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EmailsCreateManyInput.prototype, "cust_id", void 0);
EmailsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsCreateManyInput", {
        isAbstract: true
    })
], EmailsCreateManyInput);
exports.EmailsCreateManyInput = EmailsCreateManyInput;
