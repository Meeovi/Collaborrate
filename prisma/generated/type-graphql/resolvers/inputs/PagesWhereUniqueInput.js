"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PagesWhereUniqueInput = class PagesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PagesWhereUniqueInput.prototype, "id", void 0);
PagesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesWhereUniqueInput", {
        isAbstract: true
    })
], PagesWhereUniqueInput);
exports.PagesWhereUniqueInput = PagesWhereUniqueInput;
