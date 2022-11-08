"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsUpdateInput_1 = require("../../../inputs/VendorsUpdateInput");
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
let UpdateOneVendorsArgs = class UpdateOneVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsUpdateInput_1.VendorsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsUpdateInput_1.VendorsUpdateInput)
], UpdateOneVendorsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], UpdateOneVendorsArgs.prototype, "where", void 0);
UpdateOneVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneVendorsArgs);
exports.UpdateOneVendorsArgs = UpdateOneVendorsArgs;
