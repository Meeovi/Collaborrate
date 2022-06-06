"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsUpdateInput_1 = require("../../../inputs/CouponsUpdateInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
let UpdateCouponsArgs = class UpdateCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateInput_1.CouponsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateInput_1.CouponsUpdateInput)
], UpdateCouponsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], UpdateCouponsArgs.prototype, "where", void 0);
UpdateCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCouponsArgs);
exports.UpdateCouponsArgs = UpdateCouponsArgs;
