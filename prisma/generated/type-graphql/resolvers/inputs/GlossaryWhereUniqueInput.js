"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlossaryWhereUniqueInput = class GlossaryWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GlossaryWhereUniqueInput.prototype, "id", void 0);
GlossaryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryWhereUniqueInput", {
        isAbstract: true
    })
], GlossaryWhereUniqueInput);
exports.GlossaryWhereUniqueInput = GlossaryWhereUniqueInput;
