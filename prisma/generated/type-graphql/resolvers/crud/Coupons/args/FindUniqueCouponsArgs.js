"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
let FindUniqueCouponsArgs = class FindUniqueCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], FindUniqueCouponsArgs.prototype, "where", void 0);
FindUniqueCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCouponsArgs);
exports.FindUniqueCouponsArgs = FindUniqueCouponsArgs;
