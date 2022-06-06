"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateWithoutCustomersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CommentsCreateWithoutCustomersInput = class CommentsCreateWithoutCustomersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateWithoutCustomersInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateWithoutCustomersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateWithoutCustomersInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateWithoutCustomersInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentsCreateWithoutCustomersInput.prototype, "published", void 0);
CommentsCreateWithoutCustomersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateWithoutCustomersInput", {
        isAbstract: true
    })
], CommentsCreateWithoutCustomersInput);
exports.CommentsCreateWithoutCustomersInput = CommentsCreateWithoutCustomersInput;
