"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneShipmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsCreateInput_1 = require("../../../inputs/ShipmentsCreateInput");
const ShipmentsUpdateInput_1 = require("../../../inputs/ShipmentsUpdateInput");
const ShipmentsWhereUniqueInput_1 = require("../../../inputs/ShipmentsWhereUniqueInput");
let UpsertOneShipmentsArgs = class UpsertOneShipmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsWhereUniqueInput_1.ShipmentsWhereUniqueInput)
], UpsertOneShipmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCreateInput_1.ShipmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsCreateInput_1.ShipmentsCreateInput)
], UpsertOneShipmentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsUpdateInput_1.ShipmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShipmentsUpdateInput_1.ShipmentsUpdateInput)
], UpsertOneShipmentsArgs.prototype, "update", void 0);
UpsertOneShipmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneShipmentsArgs);
exports.UpsertOneShipmentsArgs = UpsertOneShipmentsArgs;
