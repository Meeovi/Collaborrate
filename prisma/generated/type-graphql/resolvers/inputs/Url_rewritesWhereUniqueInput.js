"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesWhereUniqueInput = class Url_rewritesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesWhereUniqueInput.prototype, "id", void 0);
Url_rewritesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesWhereUniqueInput", {
        isAbstract: true
    })
], Url_rewritesWhereUniqueInput);
exports.Url_rewritesWhereUniqueInput = Url_rewritesWhereUniqueInput;
