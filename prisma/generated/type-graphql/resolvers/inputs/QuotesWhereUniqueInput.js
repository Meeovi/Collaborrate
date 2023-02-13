"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QuotesWhereUniqueInput = class QuotesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesWhereUniqueInput.prototype, "id", void 0);
QuotesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesWhereUniqueInput", {
        isAbstract: true
    })
], QuotesWhereUniqueInput);
exports.QuotesWhereUniqueInput = QuotesWhereUniqueInput;
