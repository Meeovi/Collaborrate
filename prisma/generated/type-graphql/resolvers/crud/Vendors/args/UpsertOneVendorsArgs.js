"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsCreateInput_1 = require("../../../inputs/VendorsCreateInput");
const VendorsUpdateInput_1 = require("../../../inputs/VendorsUpdateInput");
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
let UpsertOneVendorsArgs = class UpsertOneVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], UpsertOneVendorsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsCreateInput_1.VendorsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsCreateInput_1.VendorsCreateInput)
], UpsertOneVendorsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsUpdateInput_1.VendorsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsUpdateInput_1.VendorsUpdateInput)
], UpsertOneVendorsArgs.prototype, "update", void 0);
UpsertOneVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneVendorsArgs);
exports.UpsertOneVendorsArgs = UpsertOneVendorsArgs;
