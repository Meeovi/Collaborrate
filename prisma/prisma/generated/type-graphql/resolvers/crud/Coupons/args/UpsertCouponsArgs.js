"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateInput_1 = require("../../../inputs/CouponsCreateInput");
const CouponsUpdateInput_1 = require("../../../inputs/CouponsUpdateInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
let UpsertCouponsArgs = class UpsertCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], UpsertCouponsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateInput_1.CouponsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsCreateInput_1.CouponsCreateInput)
], UpsertCouponsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateInput_1.CouponsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateInput_1.CouponsUpdateInput)
], UpsertCouponsArgs.prototype, "update", void 0);
UpsertCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertCouponsArgs);
exports.UpsertCouponsArgs = UpsertCouponsArgs;
