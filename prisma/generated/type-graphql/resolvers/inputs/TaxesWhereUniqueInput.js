"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaxesWhereUniqueInput = class TaxesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaxesWhereUniqueInput.prototype, "id", void 0);
TaxesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesWhereUniqueInput", {
        isAbstract: true
    })
], TaxesWhereUniqueInput);
exports.TaxesWhereUniqueInput = TaxesWhereUniqueInput;
