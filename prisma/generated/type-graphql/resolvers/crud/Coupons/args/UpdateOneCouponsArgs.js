"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsUpdateInput_1 = require("../../../inputs/CouponsUpdateInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
let UpdateOneCouponsArgs = class UpdateOneCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateInput_1.CouponsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateInput_1.CouponsUpdateInput)
], UpdateOneCouponsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], UpdateOneCouponsArgs.prototype, "where", void 0);
UpdateOneCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCouponsArgs);
exports.UpdateOneCouponsArgs = UpdateOneCouponsArgs;
