"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArticlesWhereUniqueInput = class ArticlesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ArticlesWhereUniqueInput.prototype, "id", void 0);
ArticlesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArticlesWhereUniqueInput", {
        isAbstract: true
    })
], ArticlesWhereUniqueInput);
exports.ArticlesWhereUniqueInput = ArticlesWhereUniqueInput;
