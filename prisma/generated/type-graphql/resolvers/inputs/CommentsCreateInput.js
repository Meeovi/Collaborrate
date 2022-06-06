"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateNestedOneWithoutCommentsInput_1 = require("../inputs/CustomersCreateNestedOneWithoutCommentsInput");
let CommentsCreateInput = class CommentsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsCreateInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentsCreateInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCommentsInput_1.CustomersCreateNestedOneWithoutCommentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateNestedOneWithoutCommentsInput_1.CustomersCreateNestedOneWithoutCommentsInput)
], CommentsCreateInput.prototype, "customers", void 0);
CommentsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsCreateInput", {
        isAbstract: true
    })
], CommentsCreateInput);
exports.CommentsCreateInput = CommentsCreateInput;
