"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NewslettersWhereUniqueInput = class NewslettersWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NewslettersWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersWhereUniqueInput.prototype, "email", void 0);
NewslettersWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NewslettersWhereUniqueInput", {
        isAbstract: true
    })
], NewslettersWhereUniqueInput);
exports.NewslettersWhereUniqueInput = NewslettersWhereUniqueInput;
