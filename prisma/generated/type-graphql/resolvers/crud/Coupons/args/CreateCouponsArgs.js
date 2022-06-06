"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsCreateInput_1 = require("../../../inputs/CouponsCreateInput");
let CreateCouponsArgs = class CreateCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsCreateInput_1.CouponsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsCreateInput_1.CouponsCreateInput)
], CreateCouponsArgs.prototype, "data", void 0);
CreateCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCouponsArgs);
exports.CreateCouponsArgs = CreateCouponsArgs;
