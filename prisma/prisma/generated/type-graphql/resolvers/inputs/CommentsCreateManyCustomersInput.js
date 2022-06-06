"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateManyCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentsCreateManyCustomersInput = class CommentsCreateManyCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsCreateManyCustomersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateManyCustomersInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateManyCustomersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateManyCustomersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateManyCustomersInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentsCreateManyCustomersInput.prototype, "published", void 0);
CommentsCreateManyCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateManyCustomersInput", {
        isAbstract: true
    })
], CommentsCreateManyCustomersInput);
exports.CommentsCreateManyCustomersInput = CommentsCreateManyCustomersInput;
