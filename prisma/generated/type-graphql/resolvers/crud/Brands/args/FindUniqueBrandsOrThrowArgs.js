"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBrandsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
let FindUniqueBrandsOrThrowArgs = class FindUniqueBrandsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], FindUniqueBrandsOrThrowArgs.prototype, "where", void 0);
FindUniqueBrandsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBrandsOrThrowArgs);
exports.FindUniqueBrandsOrThrowArgs = FindUniqueBrandsOrThrowArgs;
