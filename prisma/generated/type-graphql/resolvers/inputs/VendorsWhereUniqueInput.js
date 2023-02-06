"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VendorsWhereUniqueInput = class VendorsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VendorsWhereUniqueInput.prototype, "id", void 0);
VendorsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VendorsWhereUniqueInput", {
        isAbstract: true
    })
], VendorsWhereUniqueInput);
exports.VendorsWhereUniqueInput = VendorsWhereUniqueInput;
