"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsUpdateManyMutationInput_1 = require("../../../inputs/VendorsUpdateManyMutationInput");
const VendorsWhereInput_1 = require("../../../inputs/VendorsWhereInput");
let UpdateManyVendorsArgs = class UpdateManyVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsUpdateManyMutationInput_1.VendorsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsUpdateManyMutationInput_1.VendorsUpdateManyMutationInput)
], UpdateManyVendorsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereInput_1.VendorsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VendorsWhereInput_1.VendorsWhereInput)
], UpdateManyVendorsArgs.prototype, "where", void 0);
UpdateManyVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyVendorsArgs);
exports.UpdateManyVendorsArgs = UpdateManyVendorsArgs;
